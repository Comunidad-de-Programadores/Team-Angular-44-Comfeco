import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { SubmoduleComponent } from './submodule/submodule.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { CoreModule } from '../core/core.module';
import { MyProfileComponent } from './containers/my-profile/my-profile.component';
import { ProfileDetailsComponent } from './components/profile-details/profile-details.component';
import { RegisteredEventsComponent } from './containers/registered-events/registered-events.component';
import { EventDetailComponent } from './components/event-detail/event-detail.component';
import { GroupComponent } from './components/group/group.component';
import { GroupsComponent } from './containers/groups/groups.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SubmoduleComponent,
    MyProfileComponent,
    ProfileDetailsComponent,
    RegisteredEventsComponent,
    EventDetailComponent,
    GroupComponent,
    GroupsComponent,
  ],
  imports: [CommonModule, ProfileRoutingModule, MaterialModule, CoreModule, SharedModule, ReactiveFormsModule],
})
export class ProfileModule {}
