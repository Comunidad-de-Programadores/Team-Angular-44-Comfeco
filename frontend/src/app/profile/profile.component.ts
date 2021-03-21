import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  tabColor: string = 'primary';

  constructor() {}

  ngOnInit(): void {}

  selectedIndexChange(index: number) {
    switch (index) {
      case 0:
        this.tabColor = 'primary';
        break;
      case 1:
        this.tabColor = 'accent';
        break;
      case 2:
        this.tabColor = 'warn';
        break;
      case 3:
        this.tabColor = 'green';
        break;

      default:
        this.tabColor = 'primary';
        break;
    }
  }
}
