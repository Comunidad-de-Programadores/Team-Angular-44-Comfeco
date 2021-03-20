import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Comunity } from 'src/app/core/models/comunity.model';
import { ComunitiesService } from 'src/app/core/services/comunities.service';

@Component({
  selector: 'app-comunities',
  templateUrl: './comunities.component.html',
  styleUrls: ['./comunities.component.scss'],
})
export class ComunitiesComponent implements OnInit {
  comunities$: Observable<Comunity[]>;

  constructor(private comunitiesService: ComunitiesService) {}

  ngOnInit(): void {
    this.getComunities();
  }

  getComunities() {
    this.comunities$ = this.comunitiesService.getComunities();
  }
}
