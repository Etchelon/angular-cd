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
import { OnPushBlocksChildrenComponent } from './on-push-blocks-children/on-push-blocks-children.component';
import { ChangeSubpropertyComponent } from './change-subproperty/change-subproperty.component';
import { ObjectInputComponent } from './change-subproperty/object-input/object-input.component';
import { ObjectInputPushComponent } from './change-subproperty/object-input-push/object-input-push.component';
import { ErrorNoChangesComponent } from './error-no-changes/error-no-changes.component';
import { ChildWithEmitterComponent } from './error-no-changes/child-with-emitter/child-with-emitter.component';
import { ChildWithBindingComponent } from './error-no-changes/child-with-binding/child-with-binding.component';
import { ChildWithNoBindingComponent } from './error-no-changes/child-with-no-binding/child-with-no-binding.component';
import { ChildWithInjectedParentComponent } from './error-no-changes/child-with-injected-parent/child-with-injected-parent.component';

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
        OnPushBlocksChildrenComponent,
        ChangeSubpropertyComponent,
        ObjectInputComponent,
        ObjectInputPushComponent,
        ErrorNoChangesComponent,
        ChildWithEmitterComponent,
        ChildWithBindingComponent,
        ChildWithNoBindingComponent,
        ChildWithInjectedParentComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
