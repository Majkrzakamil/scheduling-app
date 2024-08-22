import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HourlyScheduleComponent } from '../hourly-schedule/hourly-schedule.component';
import { DailyScheduleComponent } from '../daily-schedule/daily-schedule.component';
import { WeeklyScheduleComponent } from '../weekly-schedule/weekly-schedule.component';
import { MonthlyScheduleComponent } from '../monthly-schedule/monthly-schedule.component';

@Component({
	selector: 'app-schedule-selector',
	templateUrl: './schedule-selector.component.html',
	styleUrls: ['./schedule-selector.component.scss'],
	standalone: true,
	imports: [CommonModule, FormsModule, HourlyScheduleComponent, DailyScheduleComponent, WeeklyScheduleComponent, MonthlyScheduleComponent]
})
export class ScheduleSelectorComponent {
	scheduleType = 'hourly';
}
