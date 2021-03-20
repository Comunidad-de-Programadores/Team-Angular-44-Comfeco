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
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { EditCredentialsComponent } from './components/edit-credentials/edit-credentials.component';
import { MyGroupComponent } from './components/my-group/my-group.component';
import { BadgesComponent } from './containers/badges/badges.component';
import { BadgeComponent } from './components/badge/badge.component';
import { MyBadgesComponent } from './components/my-badges/my-badges.component';



@NgModule({
  declarations: [
    SubmoduleComponent,
    MyProfileComponent,
    ProfileDetailsComponent,
    RegisteredEventsComponent,
    EventDetailComponent,
    GroupComponent,
    GroupsComponent,
    EditProfileComponent,
    EditCredentialsComponent,
    MyGroupComponent,
    BadgesComponent,
    BadgeComponent,
    MyBadgesComponent,
  ],
  imports: [CommonModule, ProfileRoutingModule, MaterialModule, CoreModule, SharedModule, ReactiveFormsModule],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'en-GB' }],
})
export class ProfileModule {}
