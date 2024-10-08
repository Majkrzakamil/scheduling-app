import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CustomDatepickerComponent } from '../custom-datepicker/custom-datepicker.component';
import { TimeInputComponent } from '../time-input/time-input.component';

@Component({
	selector: 'app-monthly-schedule',
	templateUrl: './monthly-schedule.component.html',
	styleUrls: ['./monthly-schedule.component.scss'],
	standalone: true,
	imports: [CommonModule, FormsModule, CustomDatepickerComponent, TimeInputComponent]
})
export class MonthlyScheduleComponent {
	selectedDates: Date[] = [];
	times: string[] = [''];

	handleDateChange(dates: Date[]): void {
		this.selectedDates = dates;
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
			selectedDates: this.selectedDates,
			selectedTimes: this.times
		});
	}
}
