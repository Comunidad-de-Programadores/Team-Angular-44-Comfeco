import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { CoreModule } from '../core/core.module';
import { MyProfileComponent } from './containers/my-profile/my-profile.component';
import { ProfileDetailsComponent } from './components/profile-details/profile-details.component';
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
import { RecentActivityComponent } from './containers/recent-activity/recent-activity.component';
import { RecentActivityItemComponent } from './components/recent-activity-item/recent-activity-item.component';
import { EventsComponent } from './containers/events/events.component';
import { EventItemComponent } from './components/event-item/event-item.component';
import { ProfileComponent } from './profile.component';
import { InterestEventsComponent } from './containers/interest-events/interest-events.component';
import { GroupMemberComponent } from './components/group-member/group-member.component';
import { EventDetailsModalComponent } from './components/event-details-modal/event-details-modal.component';



@NgModule({
  declarations: [
    ProfileComponent,
    MyProfileComponent,
    ProfileDetailsComponent,
    InterestEventsComponent,
    EventDetailComponent,
    GroupComponent,
    GroupsComponent,
    EditProfileComponent,
    EditCredentialsComponent,
    MyGroupComponent,
    BadgesComponent,
    BadgeComponent,
    MyBadgesComponent,
    RecentActivityComponent,
    RecentActivityItemComponent,
    GroupMemberComponent,
    EventsComponent,
    EventItemComponent,
    EventDetailsModalComponent
  ],
  imports: [CommonModule, ProfileRoutingModule, MaterialModule, CoreModule, SharedModule, ReactiveFormsModule],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'en-GB' }],
})
export class ProfileModule {}
