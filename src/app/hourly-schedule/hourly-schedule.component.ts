import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TimeInputComponent } from '../time-input/time-input.component';

@Component({
	selector: 'app-hourly-schedule',
	templateUrl: './hourly-schedule.component.html',
	styleUrls: ['./hourly-schedule.component.scss'],
	standalone: true,
	imports: [CommonModule, FormsModule, TimeInputComponent]
})
export class HourlyScheduleComponent {
	times: number[] = [0];

	handleTimeChange(newTimes: string[] | number[]): void {
		const sanitizedTimes = newTimes.map(time => (time === '' ? 0 : +time));
		if (sanitizedTimes.every(time => typeof time === 'number')) {
			this.times = sanitizedTimes;
			this.logTimes();
		} else {
			console.error("Expected times of type number[], received string[]");
		}
	}

	logTimes(): void {
		console.log(this.times);
	}
}
