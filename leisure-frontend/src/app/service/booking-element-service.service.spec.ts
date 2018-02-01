import { TestBed, inject } from '@angular/core/testing';

import { BookingElementServiceService } from './booking-element-service.service';

describe('BookingElementServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookingElementServiceService]
    });
  });

  it('should be created', inject([BookingElementServiceService], (service: BookingElementServiceService) => {
    expect(service).toBeTruthy();
  }));
});
