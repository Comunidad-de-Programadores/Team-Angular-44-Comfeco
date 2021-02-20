import { Component, OnInit } from '@angular/core';
import { Observable, EMPTY } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { CountDown } from './count-down';

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

  constructor() {}

  ngOnInit(): void {
    let startDate = new Date('Feb 10, 2021 15:37:25').getTime();
    let countDownDate = new Date('Feb 21, 2021 15:37:25').getTime();

    this.getCurrentDateDifference(startDate, countDownDate);
    setInterval(() => {
      this.getCurrentDateDifference(startDate, countDownDate);
    }, 1000);
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
