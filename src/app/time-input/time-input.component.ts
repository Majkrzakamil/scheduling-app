import { Component, EventEmitter, Input, Output } from '@angular/core'
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
	selector: 'app-time-input',
	templateUrl: './time-input.component.html',
	styleUrls: ['./time-input.component.scss'],
	standalone: true,
	imports: [CommonModule, FormsModule]
})
export class TimeInputComponent {
	@Input() times: string[] = [];
	@Input() canEdit: boolean = false;
	@Input() label?: string;
	@Output() timesChange = new EventEmitter<string[]>();

	logTimes(): void {
		this.timesChange.emit(this.times);
	}

	addTime(): void {
		if (this.canEdit) {
			this.times.push('');
			this.logTimes();
		}
	}

	removeTime(index: number): void {
		if (this.canEdit && this.times.length > 1) {
			this.times.splice(index, 1);
			this.logTimes();
		}
	}
}
