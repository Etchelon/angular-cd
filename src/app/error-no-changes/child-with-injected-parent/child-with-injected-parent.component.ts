import { Component } from "@angular/core";
import { SelfLoggingComponent } from "../../self-logging-component.type";
import { ErrorNoChangesComponent } from "../error-no-changes.component";

@Component({
    selector: "child-with-injected-parent",
    templateUrl: "./child-with-injected-parent.component.html",
    styleUrls: ["./child-with-injected-parent.component.scss"],
})
export class ChildWithInjectedParentComponent extends SelfLoggingComponent {
    originalMessage = "I have no parent component!";

    constructor(private readonly parent: ErrorNoChangesComponent) {
        super();
    }
    
    ngOnInit(): void {
        super.ngOnInit();
        this.originalMessage = this.parent.message;
    }

    ngAfterViewInit(): void {
        super.ngAfterViewInit();
        this.parent.message = `This message was updated by ${this.constructor.name} in ngAfterViewInit`;
    }

    noop() {}
}
