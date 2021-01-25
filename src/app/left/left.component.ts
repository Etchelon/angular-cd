import { Component } from '@angular/core';
import { SelfLoggingComponent } from '../self-logging-component.type';

@Component({
  selector: 'left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.scss']
})
export class LeftComponent extends SelfLoggingComponent {}
