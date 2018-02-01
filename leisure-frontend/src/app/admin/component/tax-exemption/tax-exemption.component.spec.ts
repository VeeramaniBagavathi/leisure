import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxExemptionComponent } from './tax-exemption.component';

describe('TaxExemptionComponent', () => {
  let component: TaxExemptionComponent;
  let fixture: ComponentFixture<TaxExemptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxExemptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxExemptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
