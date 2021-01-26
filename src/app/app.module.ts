import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { LeftContentComponent } from "./left-content/left-content.component";
import { RightContentComponent } from "./right-content/right-content.component";
import { EventsLogComponent } from "./events-log/events-log.component";
import { ClickComponent } from "./click/click.component";
import { HttpCallComponent } from "./http-call/http-call.component";
import { HttpCallPushComponent } from "./http-call-push/http-call-push.component";
import { HttpCallTestsComponent } from './http-call-tests/http-call-tests.component';
import { AppRoutingModule } from "./app-routing.module";
import { LeftViewComponent } from './left-view/left-view.component';
import { RightViewComponent } from './right-view/right-view.component';

@NgModule({
    imports: [BrowserModule, HttpClientModule, AppRoutingModule],
    declarations: [
        AppComponent,
        LeftContentComponent,
        RightContentComponent,
        EventsLogComponent,
        ClickComponent,
        HttpCallComponent,
        HttpCallPushComponent,
        HttpCallTestsComponent,
        LeftViewComponent,
        RightViewComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
