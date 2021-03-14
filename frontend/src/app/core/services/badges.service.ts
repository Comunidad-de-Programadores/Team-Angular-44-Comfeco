import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Badge } from '../models/badge.model';

@Injectable({
  providedIn: 'root',
})
export class BadgesService {
  constructor(private angularFire: AngularFireDatabase) {}

  getBadges(): Observable<[Badge]> {
    const badgesReference: AngularFireList<any> = this.angularFire.list('badges');

    return badgesReference
      .snapshotChanges()
      .pipe(
        map((snapshots) => snapshots.map((snapshot) => ({ id: snapshot.key, ...snapshot.payload.val() })))
      ) as Observable<[Badge]>;
  }
}
