import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/core/models/user.model';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss'],
})
export class ProfileDetailsComponent implements OnInit {
  @Input() profile: User;
  @Output() changeVisibilityProfile = new EventEmitter<boolean>();
  constructor() {}

  ngOnInit(): void {}

  showProfile(): void {
    this.changeVisibilityProfile.emit(true);
  }
}
