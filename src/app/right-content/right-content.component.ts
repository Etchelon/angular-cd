import { Component, ChangeDetectionStrategy } from "@angular/core";
import { SelfLoggingComponent } from "../self-logging-component.type";

@Component({
    selector: "right-content",
    templateUrl: "./right-content.component.html",
    styleUrls: ["./right-content.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RightContentComponent extends SelfLoggingComponent {}
