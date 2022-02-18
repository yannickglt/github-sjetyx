import { withFeatureStoreState } from '@mondosha1/feature-store-kit'
import { UUID } from '@mondosha1/string'

export const FEATURE_LIB1_FEATURE = 'featureLib1'

export interface FeatureLib1State {
  id: UUID
}

export interface FeatureLib1StoreState {
  readonly [FEATURE_LIB1_FEATURE]: FeatureLib1State
}

export const featureLib1InitialState = withFeatureStoreState<FeatureLib1State>({
  id: null
})
