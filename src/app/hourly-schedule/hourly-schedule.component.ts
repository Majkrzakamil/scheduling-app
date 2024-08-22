import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MinutesInputComponent } from '../minutes-input/minutes-input.component';

@Component({
	selector: 'app-hourly-schedule',
	templateUrl: './hourly-schedule.component.html',
	styleUrls: ['./hourly-schedule.component.scss'],
	standalone: true,
	imports: [CommonModule, FormsModule, MinutesInputComponent]
})
export class HourlyScheduleComponent {
	times: number[] = [0];

	handleTimeChange(newTimes: number[]): void {
		this.times = newTimes;
		this.logTimes();
	}

	logTimes(): void {
		console.log(this.times);
	}
}
