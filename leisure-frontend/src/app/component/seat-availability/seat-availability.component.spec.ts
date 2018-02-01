import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatAvailabilityComponent } from './seat-availability.component';

describe('SeatAvailabilityComponent', () => {
  let component: SeatAvailabilityComponent;
  let fixture: ComponentFixture<SeatAvailabilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeatAvailabilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeatAvailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
