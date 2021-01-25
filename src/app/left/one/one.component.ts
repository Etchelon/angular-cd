import { Component } from "@angular/core";
import { SelfLoggingComponent } from "../../self-logging-component.type";

@Component({
    selector: "one",
    templateUrl: "./one.component.html",
    styleUrls: ["./one.component.scss"],
})
export class OneComponent extends SelfLoggingComponent {
    onClick(): void {
        this.log("Clicked!");
    }
}
