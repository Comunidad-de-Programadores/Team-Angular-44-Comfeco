import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Comunity } from '../models/comunity.model';

@Injectable({
  providedIn: 'root',
})
export class ComunitiesService {
  constructor(private firebaseDatabase: AngularFireDatabase) {}

  getComunities(): Observable<Comunity[]> {
    const comunitiesRef: AngularFireList<any> = this.firebaseDatabase.list('comunities');

    return comunitiesRef
      .snapshotChanges()
      .pipe(
        map((snapshots) => snapshots.map((snapshot) => ({ id: snapshot.key, ...snapshot.payload.val() })))
      ) as Observable<Comunity[]>;
  }
}
