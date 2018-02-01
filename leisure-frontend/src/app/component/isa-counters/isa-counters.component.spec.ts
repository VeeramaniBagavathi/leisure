import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IsaCountersComponent } from './isa-counters.component';

describe('IsaCountersComponent', () => {
  let component: IsaCountersComponent;
  let fixture: ComponentFixture<IsaCountersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsaCountersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsaCountersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
