import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-custom-datepicker',
	templateUrl: './custom-datepicker.component.html',
	styleUrls: ['./custom-datepicker.component.scss'],
	standalone: true,
	imports: [CommonModule]
})
export class CustomDatepickerComponent {
	currentMonth: Date = new Date();
	selectedDates: Date[] = [];
	isLastDaySelected: boolean = false;

	@Output() dateChange = new EventEmitter<Date[]>();

	getDaysInMonth(): Date[] {
		let year = this.currentMonth.getFullYear();
		let month = this.currentMonth.getMonth();
		let date = new Date(year, month, 1);
		let days = [];

		while (date.getMonth() === month) {
			days.push(new Date(date));
			date.setDate(date.getDate() + 1);
		}

		return days;
	}

	toggleDateSelection(day: Date): void {
		const foundIndex = this.selectedDates.findIndex(d =>
			d.getDate() === day.getDate() && d.getMonth() === day.getMonth() && d.getFullYear() === day.getFullYear());
		if (foundIndex > -1) {
			this.selectedDates.splice(foundIndex, 1);
		} else {
			this.selectedDates.push(new Date(day));
		}
		this.updateLastDaySelection();
		this.dateChange.emit(this.selectedDates);
	}

	isSelected(day: Date): boolean {
		return this.selectedDates.some(d =>
			d.getDate() === day.getDate() && d.getMonth() === day.getMonth() && d.getFullYear() === day.getFullYear());
	}

	selectLastDayOfMonth(): void {
		const endOfMonth = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth() + 1, 0);
		const isCurrentlySelected = this.selectedDates.some(d => d.getTime() === endOfMonth.getTime());

		if (isCurrentlySelected) {
			// Unselect the last day
			this.toggleDateSelection(endOfMonth);
			this.isLastDaySelected = false;
		} else {
			// Select the last day
			this.toggleDateSelection(endOfMonth);
			this.isLastDaySelected = true;
		}
	}

	updateLastDaySelection(): void {
		const lastDay = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0);
		this.isLastDaySelected = this.selectedDates.some(d => d.getTime() === lastDay.getTime());
	}
}
