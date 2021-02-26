import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-submodule',
  templateUrl: './submodule.component.html',
  styleUrls: ['./submodule.component.scss'],
})
export class SubmoduleComponent implements OnInit {
  tabColor: string = 'primary';
  constructor() {}

  ngOnInit(): void {}

  selectedIndexChange(index: number) {
    switch (index) {
      case 1:
        this.tabColor = 'accent';
        break;
      case 2:
        this.tabColor = 'warn';
        break;
      case 3:
        this.tabColor = 'grey';
        break;

      default:
        this.tabColor = 'primary';
        break;
    }
  }
}
