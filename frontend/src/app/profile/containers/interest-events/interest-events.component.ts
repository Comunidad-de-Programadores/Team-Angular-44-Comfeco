import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { EventData } from 'src/app/core/models/event-data.model';
import { EventsService } from 'src/app/core/services/events.service';

@Component({
  selector: 'app-interest-events',
  templateUrl: './interest-events.component.html',
  styleUrls: ['./interest-events.component.scss']
})
export class InterestEventsComponent implements OnInit {

  public events$: Observable<EventData[]>;

  constructor(private eventsService: EventsService) {}

  ngOnInit(): void {
    this.getInterestServices();
  }

  getInterestServices() {
    this.events$ = this.eventsService.getInterestEvents();
  }

}
