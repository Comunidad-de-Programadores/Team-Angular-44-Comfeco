import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Group } from '../models/group.model';
import { Team } from '../models/team.model';

@Injectable({
  providedIn: 'root',
})
export class GroupsService {
  constructor(private firebaseDatabase: AngularFireDatabase) {}

  getGroups(): Observable<[Group]> {
    const groupsReference: AngularFireList<any> = this.firebaseDatabase.list('groups');

    return groupsReference.snapshotChanges()
      .pipe(
        map((snapshots) => {
          return snapshots.map((snapshot) => ({ ...snapshot.payload.val(), id: snapshot.key }));
        })
      ) as Observable<[Group]>;
  }

  getMyGroup(): Observable<Team>  {
    const myTeamFef: AngularFireObject<any> = this.firebaseDatabase.object('my-group');

    return myTeamFef.snapshotChanges()
      .pipe(
        map((snapshot) => ({ id: snapshot.key, ...snapshot.payload.val() })),
        map((team) => {
          const resultMembers: [any] = Object.keys(team.members).map((memberKey) => {
            const member = { id: memberKey, ...team.members[memberKey] };

            return member;
          }) as [any];
          team.members = resultMembers;
          return team;
        })
      ) as Observable<Team>;
  }
}
