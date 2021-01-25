import {
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit,
    DoCheck,
    OnChanges,
    OnDestroy,
    OnInit,
    SimpleChanges,
} from "@angular/core";
import moment from "moment";

export abstract class SelfLoggingComponent
    implements
        OnInit,
        OnChanges,
        AfterViewInit,
        AfterContentInit,
        AfterViewChecked,
        AfterContentChecked,
        DoCheck,
        OnDestroy {
    readonly logs: string[];

    constructor() {
        this.logs = [`${this.getComponentName()} - Constructed.`];
    }

    protected getComponentName(): string {
        return this.constructor.name;
    }

    protected log(msg: string): void {
        this.logs.push(
            `${moment().format(
                "HH:mm:ss:SSS"
            )} - ${this.getComponentName()} - ${msg}`
        );
    }

    ngOnInit(): void {
        this.log("ngOnInit.");
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.log(
            `ngOnChanges. Changed inputs: ${Object.keys(changes).join(", ")}`
        );
    }

    ngAfterViewInit(): void {
        this.log("ngAfterViewInit.");
    }

    ngAfterContentInit(): void {
        this.log("ngAfterContentInit.");
    }

    ngAfterViewChecked(): void {
        this.log("ngAfterViewChecked.");
    }

    ngAfterContentChecked(): void {
        this.log("ngAfterContentChecked.");
    }

    ngDoCheck(): void {
        this.log("ngDoCheck.");
    }

    ngOnDestroy(): void {
        this.log("ngOnDestroy.");
    }
}
