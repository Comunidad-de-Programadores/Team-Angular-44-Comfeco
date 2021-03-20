import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { User } from 'src/app/core/models/user.model';
import { AuthService } from 'src/app/core/services/auth.service';
import { BadgesService } from 'src/app/core/services/badges.service';
import { Badge } from '../../../core/models/badge.model';
@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss'],
})
export class MyProfileComponent implements OnInit, OnDestroy {
  profileData$: Observable<User>;
  authSubscription: Subscription;
  badges$: Observable<[Badge]>;
  showProfile: boolean;
  professions: { id: number; text: string }[];

  constructor(private authService: AuthService, private badgesService: BadgesService) {
    this.showProfile = false;
    this.professions = [
      { id: 1, text: 'Frontend' },
      { id: 2, text: 'Backend' },
      { id: 3, text: 'Mobile' },
      { id: 4, text: 'FullStack' },
    ];
  }

  ngOnInit(): void {
    this.getProfileData();
    this.getBadges();
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }

  getBadges() {
    this.badges$ = this.badgesService.getBadges();
  }

  getProfileData() {
    this.authSubscription = this.authService.getAuthState().subscribe((authState) => {
      this.profileData$ = this.authService.getCurrentUser(authState.uid);
    });
  }
}
