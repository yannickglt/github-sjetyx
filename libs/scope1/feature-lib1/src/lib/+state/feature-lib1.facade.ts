import { Injectable } from '@angular/core'
import { FeatureStoreFacadeFactory } from '@mondosha1/feature-store-kit'
import { of } from '@mondosha1/core'
import { Lazy } from '@mondosha1/decorators'
import { Nullable } from '@mondosha1/nullable'
import { UUID } from '@mondosha1/string'
import { select, Store } from '@ngrx/store'
import { defaults, find, first } from 'lodash/fp'
import { combineLatest, Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { featureLib1Query } from './feature-lib1.selectors'
import { FEATURE_LIB1_FEATURE, FeatureLib1State, FeatureLib1StoreState } from './feature-lib1.state'

@Injectable()
export class FeatureLib1Facade {
  public readonly id$: Observable<Nullable<UUID>> = this.store.pipe(
    select(featureLib1Query.getId, { featureStoreKey: FEATURE_LIB1_FEATURE })
  )
  private readonly featureStoreFacade = this.featureStoreFacadeFactory.getFacade<FeatureLib1State>(FEATURE_LIB1_FEATURE)

  public constructor(
    public readonly featureStoreFacadeFactory: FeatureStoreFacadeFactory,
    private readonly store: Store<FeatureLib1StoreState>
  ) {}
}
