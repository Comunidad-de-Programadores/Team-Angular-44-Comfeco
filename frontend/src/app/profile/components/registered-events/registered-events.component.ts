import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registered-events',
  templateUrl: './registered-events.component.html',
  styleUrls: ['./registered-events.component.scss']
})
export class RegisteredEventsComponent implements OnInit {

  public events = [
    {
      img: 'assets/images/logo.png',
      name: 'Community Fest and Code'
    },
    {
      img: 'assets/images/logo.png',
      name: 'Community Fest and Code'
    },
    {
      img: 'assets/images/logo.png',
      name: 'Community Fest and Code'
    },
    {
      img: 'assets/images/logo.png',
      name: 'Community Fest and Code'
    },
    {
      img: 'assets/images/logo.png',
      name: 'Community Fest and Code'
    },
    {
      img: 'assets/images/logo.png',
      name: 'Community Fest and Code'
    },
    {
      img: 'assets/images/logo.png',
      name: 'Community Fest and Code'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
