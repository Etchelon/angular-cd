import { Component, EventEmitter, Input, Output } from "@angular/core";
import { SelfLoggingComponent } from "../../self-logging-component.type";

@Component({
    selector: "child-with-emitter",
    templateUrl: "./child-with-emitter.component.html",
    styleUrls: ["./child-with-emitter.component.scss"],
})
export class ChildWithEmitterComponent extends SelfLoggingComponent {
    @Input() emitOn: "init" | "viewInit";
    @Output() readonly messageChanged = new EventEmitter<string>();
    get message(): string {
        return `Message emitted during: ${this.emitOn}`;
    }

    constructor() {
        super();
    }

    ngOnInit(): void {
        super.ngOnInit();
        this.emitOn === "init" && this.messageChanged.emit(this.message);
    }

    ngAfterViewInit(): void {
        super.ngAfterViewInit();
        this.emitOn === "viewInit" && this.messageChanged.emit(this.message);
    }
}
