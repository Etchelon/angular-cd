import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    Input,
} from "@angular/core";
import { HttpClient } from "@angular/common/http";
import _ from "lodash";
import { SelfLoggingComponent } from "../self-logging-component.type";
import { RefreshBehavior } from "../types";

@Component({
    selector: "http-call-push",
    templateUrl: "./http-call-push.component.html",
    styleUrls: ["./http-call-push.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HttpCallPushComponent extends SelfLoggingComponent {
    @Input() refreshBehavior: RefreshBehavior = "markForCheck";
    episodeName = "Not loaded.";
    loading = true;

    constructor(
        private readonly cdr: ChangeDetectorRef,
        private readonly http: HttpClient
    ) {
        super();
    }

    ngOnInit(): void {
        super.ngOnInit();
        this.loadRickAndMortyEpisode();
    }

    private loadRickAndMortyEpisode(): void {
        this.log("Initiating http call to Rick and Morty API");
        this.http
            .get(`https://rickandmortyapi.com/api/episode/${_.random(1, 42)}`)
            .subscribe(
                (episode: any) => {
                    this.episodeName = episode.name;
                    this.log(
                        "Response OK received from Rick and Morty API. Episode: " +
                            this.episodeName
                    );
                    this.checkedRefresh();
                },
                _.noop,
                () => {
                    this.loading = false;
                    this.log("Setting loading to false");
                    this.checkedRefresh();
                }
            );
    }

    private checkedRefresh(): void {
        this.refreshBehavior === "markForCheck" && this.cdr.markForCheck();
        this.refreshBehavior === "detectChanges" && this.cdr.detectChanges();
    }
}
