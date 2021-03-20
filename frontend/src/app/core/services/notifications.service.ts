import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NotificationData } from '../models/notification-data.model';

@Injectable({
  providedIn: 'root',
})
export class NotificationsService {
  constructor(private firebaseDatabase: AngularFireDatabase) {}

  getRecentActivity(): Observable<NotificationData[]> {
    const recentActivityRef: AngularFireList<any> = this.firebaseDatabase.list('recent-activity');

    return recentActivityRef
      .snapshotChanges()
      .pipe(
        map((snapshots) => snapshots.map((snapshot) => ({ id: snapshot.key, ...snapshot.payload.val() })).reverse())
      ) as Observable<NotificationData[]>;
  }
}
