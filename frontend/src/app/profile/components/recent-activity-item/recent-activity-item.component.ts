import { Component, Input, OnInit } from '@angular/core';
import { NotificationData } from 'src/app/core/models/notification-data.model';

@Component({
  selector: 'app-recent-activity-item',
  templateUrl: './recent-activity-item.component.html',
  styleUrls: ['./recent-activity-item.component.scss']
})
export class RecentActivityItemComponent implements OnInit {
  @Input() notification: NotificationData;

  constructor() { }

  ngOnInit(): void {
  }

}
