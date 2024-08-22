import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HourlyScheduleComponent } from './hourly-schedule.component';

describe('HourlyScheduleComponent', () => {
  let component: HourlyScheduleComponent;
  let fixture: ComponentFixture<HourlyScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HourlyScheduleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HourlyScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
