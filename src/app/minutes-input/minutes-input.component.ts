import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
	selector: 'app-minutes-input',
	templateUrl: './minutes-input.component.html',
	standalone: true,
	imports: [CommonModule, FormsModule]
})
export class MinutesInputComponent {
	@Input() minutes: number[] = [0];
	@Input() canEdit: boolean = true;
	@Input() label?: string;
	@Output() minutesChange = new EventEmitter<number[]>();

	logMinutes(): void {
		this.minutesChange.emit(this.minutes);
	}

	addMinute(): void {
		this.minutes.push(0);
		this.logMinutes();
	}

	removeMinute(index: number): void {
		if (this.minutes.length > 1) {
			this.minutes.splice(index, 1);
			this.logMinutes();
		}
	}
}
