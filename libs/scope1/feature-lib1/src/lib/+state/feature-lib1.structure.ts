import { Structure } from '@mondosha1/feature-store-kit'
import { deepFreeze } from '@mondosha1/object'
import { FeatureLib1State } from './feature-lib1.state'

export const featureLib1Structure = deepFreeze<Structure<FeatureLib1State>>({
  id: 'string'
})
