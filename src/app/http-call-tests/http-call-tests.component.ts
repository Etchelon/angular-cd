import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ParentContainmentMode } from "../types";

@Component({
    selector: "http-call-tests",
    templateUrl: "./http-call-tests.component.html",
    styleUrls: ["./http-call-tests.component.scss"],
})
export class HttpCallTestsComponent implements OnInit {
    mode: ParentContainmentMode | null = null;

    constructor(private readonly route: ActivatedRoute) {}

    ngOnInit(): void {
        this.route.queryParamMap.subscribe((paramMap) => {
            this.mode =
                (paramMap.get("mode") as ParentContainmentMode) ?? "content";
        });
    }
}
