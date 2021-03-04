import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { SubmoduleComponent } from './submodule/submodule.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { CoreModule } from '../core/core.module';
import { MyProfileComponent } from './containers/my-profile/my-profile.component';
import { ProfileDetailsComponent } from './components/profile-details/profile-details.component';

@NgModule({
  declarations: [SubmoduleComponent, MyProfileComponent, ProfileDetailsComponent],
  imports: [CommonModule, ProfileRoutingModule, MaterialModule, CoreModule, SharedModule],
})
export class ProfileModule {}
