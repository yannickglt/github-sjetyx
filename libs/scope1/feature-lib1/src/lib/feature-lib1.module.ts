import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { emptyReducer, FeatureStoreModule } from '@mondosha1/feature-store-kit'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'
import { FeatureLib1Effects, FeatureLib1Facade } from './+state'
import {
  FEATURE_LIB1_FEATURE as featureStoreKey,
  featureLib1InitialState as initialState,
  FeatureLib1State
} from './+state/feature-lib1.state'
import { FeatureLib1Component } from './feature-lib1.component'
import { featureLib1Structure as structure } from './+state/feature-lib1.structure'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: FeatureLib1Component,
        data: { featureStoreKey }
      }
    ]),
    StoreModule.forFeature(featureStoreKey, emptyReducer, { initialState }),
    FeatureStoreModule.forFeature<FeatureLib1State>({
      featureStoreKey,
      initialState,
      structure
    }),
    EffectsModule.forFeature([FeatureLib1Effects])
  ],
  providers: [FeatureLib1Facade],
  declarations: [FeatureLib1Component]
})
export class FeatureLib1Module {}
