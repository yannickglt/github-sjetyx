import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { EffectsModule } from '@ngrx/effects'
import { FeatureStoreModule, featureStoreReducer } from '@mondosha1/feature-store-kit'
import { StoreModule } from '@ngrx/store'
import { BrowserModule } from '@angular/platform-browser'
import { AppComponent } from './app.component'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot(
      {},
      {
        metaReducers: [featureStoreReducer as any]
      }
    ),
    FeatureStoreModule.forRoot(),
    EffectsModule.forRoot(),
    RouterModule.forRoot(
      [
        {
          path: '',
          redirectTo: '/feature-lib1',
          pathMatch: 'full'
        },
        {
          path: 'feature-lib1',
          loadChildren: () => import('@stackblitz-nx-angular/scope1/feature-lib1').then(m => m.FeatureLib1Module)
        },
        { path: '**', redirectTo: '/feature-lib1' }
      ],
      {
        scrollPositionRestoration: 'enabled',
        anchorScrolling: 'enabled',
        scrollOffset: [0, 64]
      }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
