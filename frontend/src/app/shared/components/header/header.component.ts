import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { User } from 'src/app/core/models/user.model';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isLogged: boolean = false;
  currentUser: User;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.getLoggedStatus();
    this.getUserState();
  }

  isRecoverPasswordPath() {
    return this.router.url === '/auth/recover-password';
  }

  getLoggedStatus() {
    this.authService.isLogged().subscribe((isLogged) => {
      this.isLogged = isLogged;
    });
  }

  getUserState() {
    this.authService.getAuthState().subscribe((authState) => {
      if (authState !== null) {
        const userId = authState.uid;
        if (userId != null && userId != '') {
          this.authService.getCurrentUser(userId).subscribe((currentUser) => {
            this.currentUser = currentUser;
          });
        }
      }
    });
  }

  logOut() {
    this.authService.logout().then((success) => {
      this.router.navigate(['/auth/sign-in']);
    });
  }
}
