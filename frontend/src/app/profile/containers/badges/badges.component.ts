import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Badge } from 'src/app/core/models/badge.model';
import { BadgesService } from 'src/app/core/services/badges.service';

@Component({
  selector: 'app-badges',
  templateUrl: './badges.component.html',
  styleUrls: ['./badges.component.scss']
})
export class BadgesComponent implements OnInit {
  badges$: Observable<[Badge]>;

  constructor(private badgesService: BadgesService) { }

  ngOnInit(): void {
    this.getBadges();
  }

  getBadges() {
    this.badges$ = this.badgesService.getBadges();
  }
}
