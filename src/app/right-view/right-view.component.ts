import { Component } from "@angular/core";
import { SelfLoggingComponent } from "../self-logging-component.type";

@Component({
    selector: "right-view",
    templateUrl: "./right-view.component.html",
    styleUrls: ["./right-view.component.scss"],
})
export class RightViewComponent extends SelfLoggingComponent {}
