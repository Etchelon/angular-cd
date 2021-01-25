import { Component, Input } from '@angular/core';

@Component({
    selector: 'events-log',
    templateUrl: './events-log.component.html',
    styleUrls: ['./events-log.component.scss'],
})
export class EventsLogComponent {
    @Input() logs: string[];
}
