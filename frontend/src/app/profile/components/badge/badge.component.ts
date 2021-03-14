import { Component, Input, OnInit } from '@angular/core';
import { Badge } from 'src/app/core/models/badge.model';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})
export class BadgeComponent implements OnInit {
  @Input() badge: Badge;
  constructor() { }

  ngOnInit(): void {
  }

}
