import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EventData } from 'src/app/core/models/event-data.model';

@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.scss']
})
export class EventItemComponent implements OnInit {
  @Input() event: EventData;
  @Output() subscribeEvent = new EventEmitter<EventData>();

  constructor() { }

  ngOnInit(): void {
  }

  subscribeToEvent() {
    this.subscribeEvent.emit(this.event);
  }

}
