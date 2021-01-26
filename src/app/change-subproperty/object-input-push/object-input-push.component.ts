import {
    ChangeDetectionStrategy,
    Component,
    Input,
} from "@angular/core";
import { SelfLoggingComponent } from "src/app/self-logging-component.type";

@Component({
    selector: "object-input-push",
    templateUrl: "./object-input-push.component.html",
    styleUrls: ["./object-input-push.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ObjectInputPushComponent extends SelfLoggingComponent {
    @Input() obj: { subproperty: number };
}
