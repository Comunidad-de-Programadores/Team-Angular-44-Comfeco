import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NotificationData } from 'src/app/core/models/notification-data.model';
import { NotificationsService } from 'src/app/core/services/notifications.service';

@Component({
  selector: 'app-recent-activity',
  templateUrl: './recent-activity.component.html',
  styleUrls: ['./recent-activity.component.scss']
})
export class RecentActivityComponent implements OnInit {
  recentActivity$: Observable<NotificationData[]>;

  constructor(private notificationsService: NotificationsService) { }

  ngOnInit(): void {
    this.getRecentActivity();
  }

  getRecentActivity() {
    this.recentActivity$ = this.notificationsService.getRecentActivity();
  }

}
