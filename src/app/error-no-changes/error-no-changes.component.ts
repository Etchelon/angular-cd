import { Component } from "@angular/core";
import { SelfLoggingComponent } from "../self-logging-component.type";

@Component({
    selector: "error-no-changes",
    templateUrl: "./error-no-changes.component.html",
    styleUrls: ["./error-no-changes.component.scss"],
})
export class ErrorNoChangesComponent extends SelfLoggingComponent {
    message = "Welcome to error no changes component";
    componentToShow: number = 1;

    onMessageChanged(msg: string): void {
        this.log(`onMessageChanged - new message: ${msg}`);
        this.message = msg;
    }
}
