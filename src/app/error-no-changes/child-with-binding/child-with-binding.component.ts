import { Component, Input } from '@angular/core';
import { SelfLoggingComponent } from '../../self-logging-component.type';

@Component({
  selector: 'child-with-binding',
  templateUrl: './child-with-binding.component.html',
  styleUrls: ['./child-with-binding.component.scss']
})
export class ChildWithBindingComponent extends SelfLoggingComponent {
    @Input() value = 42;

    ngOnInit(): void {
        ++this.value;
        super.ngOnInit();
    }

    ngAfterViewInit(): void {
        ++this.value;
        super.ngAfterViewInit();
    }
}
