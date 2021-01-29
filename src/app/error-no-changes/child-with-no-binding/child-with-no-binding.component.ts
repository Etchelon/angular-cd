import { Component, Input } from '@angular/core';
import { SelfLoggingComponent } from '../../self-logging-component.type';

@Component({
  selector: 'child-with-no-binding',
  templateUrl: './child-with-no-binding.component.html',
  styleUrls: ['./child-with-no-binding.component.scss']
})
export class ChildWithNoBindingComponent extends SelfLoggingComponent {
    @Input() value = 42;

    ngOnInit(): void {
        super.ngOnInit();
        this.log(`Initial value: ${this.value++}`);
    }

    ngAfterViewInit(): void {
        super.ngAfterViewInit();
        this.log(`After view init, value is increased: ${++this.value}`);
    }

    noop() {}
}
