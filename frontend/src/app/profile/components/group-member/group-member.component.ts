import { Component, Input, OnInit } from '@angular/core';
import { Member } from 'src/app/core/models/member.model';

@Component({
  selector: 'app-group-member',
  templateUrl: './group-member.component.html',
  styleUrls: ['./group-member.component.scss']
})
export class GroupMemberComponent implements OnInit {
  @Input() member: Member;

  constructor() { }

  ngOnInit(): void {
  }

}
