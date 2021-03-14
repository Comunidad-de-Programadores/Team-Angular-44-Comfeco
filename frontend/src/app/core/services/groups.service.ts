import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Group } from '../models/group.model';

@Injectable({
  providedIn: 'root',
})
export class GroupsService {
  constructor(private firebaseDatabase: AngularFireDatabase) {}

  getGroups(): Observable<[Group]> {
    const groupsReference: AngularFireList<Group> = this.firebaseDatabase.list('groups');

    return groupsReference.snapshotChanges()
      .pipe(
        map((groups) => {
          return groups.map((group) => ({ ...group.payload.val(), id: group.key }));
        })
      ) as Observable<[Group]>;
  }
}
