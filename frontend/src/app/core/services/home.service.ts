import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Sponsor } from '../models/sponsor.model';
import { TeamLeaders } from '../models/team-leaders.model';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private firebaseDatabase: AngularFireDatabase) {}

  getSponsors(): Observable<[Sponsor]> {
    const sponsorsRef: AngularFireList<any> = this.firebaseDatabase.list('sponsors');

    return sponsorsRef
      .snapshotChanges()
      .pipe(
        map((snapshots) => snapshots.map((snapshot) => ({ id: snapshot.key, ...snapshot.payload.val() })))
      ) as Observable<[Sponsor]>;
  }

  getTeamLeaders(): Observable<[TeamLeaders]> {
    const sponsorsRef: AngularFireList<any> = this.firebaseDatabase.list('team-leaders');

    return sponsorsRef
      .snapshotChanges()
      .pipe(
        map((snapshots) => snapshots.map((snapshot) => ({ id: snapshot.key, ...snapshot.payload.val() })))
      ) as Observable<[TeamLeaders]>;
  }
}
