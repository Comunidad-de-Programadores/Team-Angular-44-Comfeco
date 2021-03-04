import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { User } from 'src/app/core/models/user.model';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit, OnDestroy {
  profileData$: Observable<User>;
  authSubscription: Subscription;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.getProfileData();
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }

  getProfileData() {
    this.authSubscription = this.authService.getAuthState().subscribe((authState) => {
      this.profileData$ = this.authService.getCurrentUser(authState.uid);
    });
  }

}
