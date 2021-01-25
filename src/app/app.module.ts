import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { LeftComponent } from "./left/left.component";
import { RightComponent } from "./right/right.component";
import { EventsLogComponent } from "./events-log/events-log.component";
import { OneComponent } from "./left/one/one.component";
import { TwoComponent } from "./left/two/two.component";

@NgModule({
    declarations: [
        AppComponent,
        LeftComponent,
        RightComponent,
        EventsLogComponent,
        OneComponent,
        TwoComponent,
    ],
    imports: [BrowserModule, HttpClientModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
