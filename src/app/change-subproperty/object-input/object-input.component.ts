import { Component, Input, OnInit } from '@angular/core';
import { SelfLoggingComponent } from 'src/app/self-logging-component.type';

@Component({
  selector: 'object-input',
  templateUrl: './object-input.component.html',
  styleUrls: ['./object-input.component.scss']
})
export class ObjectInputComponent extends SelfLoggingComponent {
    @Input() obj: { subproperty: number; };
}