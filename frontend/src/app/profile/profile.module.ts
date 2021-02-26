import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { SubmoduleComponent } from './submodule/submodule.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [SubmoduleComponent],
  imports: [CommonModule, ProfileRoutingModule, MaterialModule, CoreModule, SharedModule],
})
export class ProfileModule {}
