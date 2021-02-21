import { Component, OnInit } from '@angular/core';
import { Observable, EMPTY } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { CountDownEvent } from 'src/app/core/models/count-down-event.model';
import { CountDownService } from 'src/app/core/services/count-down/count-down.service';
import { CountDown } from './count-down.model';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.scss'],
})
export class CountDownComponent implements OnInit {
  private counterValues: CountDown = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    progress: 0,
  };
  counter$: Observable<CountDown> = EMPTY.pipe(startWith(this.counterValues));
  eventName: string;

  constructor(private countDownService: CountDownService) {}

  ngOnInit(): void {
    this.getCountDownEvent();
  }

  private getCountDownEvent() {
    this.countDownService.getCountDownEvent().subscribe((countDownEvent: CountDownEvent) => {
      let startDateZoned = new Date(countDownEvent.startDateTime);
      let endDateZoned = new Date(countDownEvent.endDateTime);
      this.eventName = countDownEvent.name;
      this.getCurrentDateDifference(startDateZoned.getTime(), endDateZoned.getTime());
      setInterval(() => {
        this.getCurrentDateDifference(startDateZoned.getTime(), endDateZoned.getTime());
      }, 1000);
    });
  }

  getCurrentDateDifference(startDate: number, countDownDate: number): void {
    let now = new Date().getTime();

    let distance = countDownDate - now;

    this.counterValues.days = Math.floor(distance / (1000 * 60 * 60 * 24));
    this.counterValues.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    this.counterValues.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    this.counterValues.seconds = Math.floor((distance % (1000 * 60)) / 1000);

    let q = Math.abs(now - startDate);
    let d = Math.abs(countDownDate - startDate);
    let progressPercentage = Math.round((q / d) * 100);

    this.counterValues.progress = progressPercentage;

    this.counter$.pipe(map((counter) => this.counterValues));
  }
}
