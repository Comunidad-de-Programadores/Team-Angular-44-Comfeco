import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { EventData } from '../models/event-data.model';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  constructor(private firebaseDatabase: AngularFireDatabase) {}

  getInterestEvents(): Observable<EventData[]> {
    const interestEventsRef: AngularFireList<any> = this.firebaseDatabase.list('interest-events');

    return interestEventsRef
      .snapshotChanges()
      .pipe(
        map((snapshots) => snapshots.map((snapshot) => ({ id: snapshot.key, ...snapshot.payload.val() })))
      ) as Observable<EventData[]>;
  }

  getEvents(): Observable<EventData[]> {
    const interestEventsRef: AngularFireList<any> = this.firebaseDatabase.list('events');

    return interestEventsRef
      .snapshotChanges()
      .pipe(
        map((snapshots) => snapshots.map((snapshot) => ({ id: snapshot.key, ...snapshot.payload.val() })))
      ) as Observable<EventData[]>;
  }
}
