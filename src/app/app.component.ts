import { Component } from '@angular/core';
import { ScheduleSelectorComponent } from './schedule-selector/schedule-selector.component';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	standalone: true,
	imports: [ScheduleSelectorComponent]
})
export class AppComponent {
	title = 'scheduling-app';
}
