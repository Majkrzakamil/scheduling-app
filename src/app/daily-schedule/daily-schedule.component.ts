import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TimeInputComponent } from '../time-input/time-input.component';

@Component({
	selector: 'app-daily-schedule',
	templateUrl: './daily-schedule.component.html',
	styleUrls: ['./daily-schedule.component.scss'],
	standalone: true,
	imports: [CommonModule, FormsModule, TimeInputComponent]
})
export class DailyScheduleComponent {
	times: string[] = [''];

	handleTimeChanges(newTimes: string[]): void {
		console.log(newTimes);
	}
}
