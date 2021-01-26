import { Component } from "@angular/core";
import { SelfLoggingComponent } from "../self-logging-component.type";

@Component({
    selector: "left-view",
    templateUrl: "./left-view.component.html",
    styleUrls: ["./left-view.component.scss"],
})
export class LeftViewComponent extends SelfLoggingComponent {}
