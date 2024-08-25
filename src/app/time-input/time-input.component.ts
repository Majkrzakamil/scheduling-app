import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
	selector: 'app-time-input',
	templateUrl: './time-input.component.html',
	styleUrls: ['./time-input.component.scss'],
	standalone: true,
	imports: [CommonModule, FormsModule]
})
export class TimeInputComponent implements OnInit {
	@Input() canEdit: boolean = true;
	@Input() label?: string;
	@Input() buttonLabel: string = '+ Add minutes';
	@Input() inputType: 'time' | 'number' = 'number';
	@Output() itemsChange = new EventEmitter<string[] | number[]>();

	times: string[] = [];
	numbers: number[] = [];

	ngOnInit() {
		this.times = this.inputType === 'time' ? [''] : [];
		this.numbers = this.inputType === 'number' ? [0] : [];
	}

	logItems(): void {
		if (this.inputType === 'time') {
			this.itemsChange.emit(this.times);
		} else {
			this.itemsChange.emit(this.numbers);
		}
	}

	addItem(): void {
		if (this.inputType === 'time') {
			this.times.push('');
			this.logItems();
		} else {
			this.numbers.push(0);
			this.logItems();
		}
	}

	removeItem(index: number): void {
		if (this.inputType === 'time' && this.times.length > 1) {
			this.times.splice(index, 1);
			this.logItems();
		} else if (this.numbers.length > 1) {
			this.numbers.splice(index, 1);
			this.logItems();
		}
	}

	trackByFn(index: number): number {
		return index;
	}
}
