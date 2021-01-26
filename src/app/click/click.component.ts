import { Component, Input } from "@angular/core";
import { SelfLoggingComponent } from "../self-logging-component.type";

@Component({
    selector: "click",
    templateUrl: "./click.component.html",
    styleUrls: ["./click.component.scss"],
})
export class ClickComponent extends SelfLoggingComponent {
    @Input() message = "Click me";

    onClick(): void {
        this.log("Clicked!");
    }
}
