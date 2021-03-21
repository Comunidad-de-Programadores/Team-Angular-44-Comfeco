import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { EventData } from 'src/app/core/models/event-data.model';
import { EventsService } from 'src/app/core/services/events.service';
import { EventDetailsModalComponent } from '../../components/event-details-modal/event-details-modal.component';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
})
export class EventsComponent implements OnInit {
  events$: Observable<EventData[]>;

  constructor(private eventsService: EventsService, private matDialog: MatDialog) {}

  ngOnInit(): void {
    this.getEvents();
  }

  getEvents() {
    this.events$ = this.eventsService.getEvents();
  }

  subscribeEvent(event: EventData) {
    const dialogRef = this.matDialog.open(EventDetailsModalComponent, {
      data: event,
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }
}
