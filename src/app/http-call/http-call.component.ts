import { ChangeDetectorRef, Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import _ from "lodash";
import { SelfLoggingComponent } from "../self-logging-component.type";

@Component({
    selector: "http-call",
    templateUrl: "./http-call.component.html",
    styleUrls: ["./http-call.component.scss"],
})
export class HttpCallComponent extends SelfLoggingComponent {
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
                },
                _.noop,
                () => {
                    this.loading = false;
                    this.log("Setting loading to false");
                }
            );
    }
}
