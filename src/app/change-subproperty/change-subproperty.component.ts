import { Component, OnInit } from '@angular/core';
import { SelfLoggingComponent } from '../self-logging-component.type';

@Component({
  selector: 'change-subproperty',
  templateUrl: './change-subproperty.component.html',
  styleUrls: ['./change-subproperty.component.scss']
})
export class ChangeSubpropertyComponent extends SelfLoggingComponent {
    obj = {
        subproperty: 0
    };

    changeSubproperty(): void {
        ++this.obj.subproperty;
    }

    changeObject(): void {
        this.changeSubproperty();
        this.obj = { ...this.obj };
    }
}
