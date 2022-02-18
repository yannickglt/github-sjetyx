import { ChangeDetectionStrategy, Component } from '@angular/core'
import { UUID } from '@mondosha1/string'
import { Lazy } from '@mondosha1/decorators'
import { Nullable } from '@mondosha1/nullable'
import { isNil, negate } from 'lodash/fp'
import { Observable } from 'rxjs'
import { filter, map } from 'rxjs/operators'
import { FeatureLib1Facade } from './+state'

@Component({
  selector: 'stackblitz-nx-angular-feature-lib1',
  template: '<strong>ID: {{ (id$ | async) }}</strong>',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeatureLib1Component {
  public readonly id$: Observable<Nullable<UUID>> = this.featureLib1Facade.id$

  public constructor(private readonly featureLib1Facade: FeatureLib1Facade) {}
}
