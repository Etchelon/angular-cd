import { ChangeDetectorRef, Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import _ from "lodash";
import { SelfLoggingComponent } from "../../self-logging-component.type";

@Component({
    selector: "two",
    templateUrl: "./two.component.html",
    styleUrls: ["./two.component.scss"],
})
export class TwoComponent extends SelfLoggingComponent {
    episodeName = "Not loaded.";
    loading = true;

    constructor(private readonly cdr: ChangeDetectorRef, private readonly http: HttpClient) {
        super();
    }

    ngOnInit(): void {
        super.ngOnInit();
        this.loadRickAndMortyEpisode();
    }

    private loadRickAndMortyEpisode(): void {
        this.log("Initiating http call to Rick and Morty API");
        this.http.get(`https://rickandmortyapi.com/api/episode/${_.random(1, 42)}`).subscribe((episode: any) => {
            this.episodeName = episode.name;
            this.log("Response OK received from Rick and Morty API. Episode: " + this.episodeName);
            this.cdr.markForCheck();
        }, _.noop, () => {
            _.delay(() => {
                this.loading = false;
                this.log("Setting loading to false");
                this.cdr.markForCheck();
            }, 1000);
        });
    }
}
