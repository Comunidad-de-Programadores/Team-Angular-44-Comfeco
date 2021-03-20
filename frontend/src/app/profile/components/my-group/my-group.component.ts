import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GroupsService } from 'src/app/core/services/groups.service';
import { Team } from '../../../core/models/team.model';

@Component({
  selector: 'app-my-group',
  templateUrl: './my-group.component.html',
  styleUrls: ['./my-group.component.scss']
})
export class MyGroupComponent implements OnInit {

  public team$: Observable<Team>;

  constructor(private groupsService: GroupsService) { }

  ngOnInit(): void {
    this.getMyTeam();
  }

  getMyTeam() {
    this.team$ = this.groupsService.getMyGroup();
  }

}
