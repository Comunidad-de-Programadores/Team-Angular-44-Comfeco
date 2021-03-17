import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComunitiesComponent } from './comunities.component';

describe('ComunitiesComponent', () => {
  let component: ComunitiesComponent;
  let fixture: ComponentFixture<ComunitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComunitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComunitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
