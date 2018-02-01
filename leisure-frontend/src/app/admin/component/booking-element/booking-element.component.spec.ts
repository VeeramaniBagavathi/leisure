import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingElementComponent } from './booking-element.component';

describe('BookingElementComponent', () => {
  let component: BookingElementComponent;
  let fixture: ComponentFixture<BookingElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
