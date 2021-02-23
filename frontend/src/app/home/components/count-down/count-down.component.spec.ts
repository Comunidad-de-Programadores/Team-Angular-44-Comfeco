import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountDownComponent } from './count-down.component';

describe('CounterComponent', () => {
  let component: CountDownComponent;
  let fixture: ComponentFixture<CountDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CountDownComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
