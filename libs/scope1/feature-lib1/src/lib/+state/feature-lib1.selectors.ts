import { of } from '@mondosha1/core'
import { Nullable } from '@mondosha1/nullable'
import { UUID } from '@mondosha1/string'
import { createFeatureSelector, createSelector } from '@ngrx/store'
import { getOr } from 'lodash/fp'
import { FEATURE_LIB1_FEATURE, FeatureLib1State } from './feature-lib1.state'

const getFeatureLib1State = createFeatureSelector<FeatureLib1State>(FEATURE_LIB1_FEATURE)

const getId = createSelector(
  getFeatureLib1State,
  (state: FeatureLib1State): Nullable<UUID> => of(state).pipe(getOr(null, 'id'))
)

export const featureLib1Query = {
  getId
}
