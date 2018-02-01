import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketPriceComponent } from './ticket-price.component';

describe('TicketPriceComponent', () => {
  let component: TicketPriceComponent;
  let fixture: ComponentFixture<TicketPriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketPriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
