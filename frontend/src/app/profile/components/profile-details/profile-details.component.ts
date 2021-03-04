import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/user.model';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss']
})
export class ProfileDetailsComponent implements OnInit {
  @Input() profile: User;
  constructor() { }

  ngOnInit(): void {
  }

}
