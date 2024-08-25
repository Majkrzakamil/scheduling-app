import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TimeInputComponent } from '../time-input/time-input.component';

interface Day {
	name: string;
	selected: boolean;
}

@Component({
	selector: 'app-weekly-schedule',
	templateUrl: './weekly-schedule.component.html',
	styleUrls: ['./weekly-schedule.component.scss'],
	standalone: true,
	imports: [CommonModule, FormsModule, TimeInputComponent]
})
export class WeeklyScheduleComponent {
	daysOfWeek: Day[] = [
		{ name: 'Monday', selected: false },
		{ name: 'Tuesday', selected: false },
		{ name: 'Wednesday', selected: false },
		{ name: 'Thursday', selected: false },
		{ name: 'Friday', selected: false },
		{ name: 'Saturday', selected: false },
		{ name: 'Sunday', selected: false }
	];
	selectedDays: string[] = [];
	times: string[] = [''];

	updateSelectedDays(day: Day): void {
		this.selectedDays = this.daysOfWeek.filter(d => d.selected).map(d => d.name);
		this.logCurrentState();
	}

	handleTimeChange(newTimes: string[] | number[]): void {
		if (typeof newTimes[0] === 'string') {
			this.times = newTimes as string[];
			this.logCurrentState();
		} else {
			console.error("Expected times of type string[], received number[]");
		}
	}

	logCurrentState(): void {
		console.log({
			selectedDays: this.selectedDays,
			times: this.times
		});
	}
}
