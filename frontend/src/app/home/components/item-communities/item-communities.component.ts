import { Component, Input, OnInit } from '@angular/core';
import { Comunity } from 'src/app/core/models/comunity.model';

@Component({
  selector: 'app-item-communities',
  templateUrl: './item-communities.component.html',
  styleUrls: ['./item-communities.component.scss']
})
export class ItemCommunitiesComponent implements OnInit {
  @Input() comunity: Comunity;

  constructor() { }

  ngOnInit(): void {
  }

}
