import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../../core/models/user.model';

@Component({
  selector: 'app-my-badges',
  templateUrl: './my-badges.component.html',
  styleUrls: ['./my-badges.component.scss'],
})
export class MyBadgesComponent implements OnInit {
  @Input() profile: User;
  constructor() {}

  ngOnInit(): void {}
}
