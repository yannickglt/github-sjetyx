import { Injectable } from '@angular/core'
import { FeatureStoreEffectsFactory } from '@mondosha1/feature-store-kit'
import { createEffect } from '@ngrx/effects'
import { Observable } from 'rxjs'
import { first, switchMap } from 'rxjs/operators'
import { FEATURE_LIB1_FEATURE, FeatureLib1State } from './feature-lib1.state'

@Injectable()
export class FeatureLib1Effects {
  private readonly featureStoreEffects =
    this.featureStoreEffectsFactory.getEffects<FeatureLib1State>(FEATURE_LIB1_FEATURE)

  public initStore = createEffect(() => this.featureStoreEffects.initStore())

  public navigateToStore = createEffect(() =>
    this.featureStoreEffects
      .navigateToStore
      /* MAKE QUERIES HERE */
      ()
  )

  public resetStoreOnLeave = createEffect(() => this.featureStoreEffects.resetStoreOnLeave())

  public updateParamsFromForm = createEffect(() => this.featureStoreEffects.updateParamsFromForm(), { dispatch: false })

  public updateStoreFromParams = createEffect(() => this.featureStoreEffects.updateStoreFromParams())

  public constructor(public readonly featureStoreEffectsFactory: FeatureStoreEffectsFactory) {}
}
