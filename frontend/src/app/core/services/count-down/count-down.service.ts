import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CountDownEvent } from '../../models/count-down-event.model';

@Injectable({
  providedIn: 'root',
})
export class CountDownService {
  constructor(private firebaseDatabase: AngularFireDatabase) {}

  getCountDownEvent(): Observable<any> {
    const countDownEventRef = this.firebaseDatabase.object('count-down-event');

    return countDownEventRef.snapshotChanges().pipe(map((countDownEvent) => countDownEvent.payload.val()));
  }

  saveCountDownEvent() {}
}
