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

	handleTimeChange(newTimes: string[] | number[]): void {
		if (typeof newTimes[0] === 'string') {
			this.times = newTimes as string[];
			console.log(this.times);
		} else {
			console.error("Expected times of type string[], received number[]");
		}
	}
}
