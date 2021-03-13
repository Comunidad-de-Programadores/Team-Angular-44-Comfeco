import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PolicyRoutingModule } from './policy-routing.module';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { PoliciesComponent } from './policies.component';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [TermsConditionsComponent, PrivacyComponent, PoliciesComponent],
  imports: [CommonModule, PolicyRoutingModule, CoreModule, SharedModule, MaterialModule],
})
export class PolicyModule {}
