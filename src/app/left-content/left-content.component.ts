import { Component } from '@angular/core';
import { SelfLoggingComponent } from '../self-logging-component.type';

@Component({
  selector: 'left-content',
  templateUrl: './left-content.component.html',
  styleUrls: ['./left-content.component.scss']
})
export class LeftContentComponent extends SelfLoggingComponent {}
