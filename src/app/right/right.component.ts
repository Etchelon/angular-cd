import { Component, ChangeDetectionStrategy } from "@angular/core";
import { SelfLoggingComponent } from "../self-logging-component.type";

@Component({
    selector: "right",
    templateUrl: "./right.component.html",
    styleUrls: ["./right.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RightComponent extends SelfLoggingComponent {}
