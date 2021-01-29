import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangeSubpropertyComponent } from './change-subproperty/change-subproperty.component';
import { ErrorNoChangesComponent } from './error-no-changes/error-no-changes.component';
import { HttpCallTestsComponent } from './http-call-tests/http-call-tests.component';
import { OnPushBlocksChildrenComponent } from './on-push-blocks-children/on-push-blocks-children.component';

const routes: Routes = [{
    path: "",
    redirectTo: "http-call",
    pathMatch: "full",
}, {
    path: "change-subproperty",
    component: ChangeSubpropertyComponent,
}, {
    path: "on-push-parent",
    component: OnPushBlocksChildrenComponent,
}, {
    path: "http-call",
    component: HttpCallTestsComponent,
}, {
    path: "no-changes",
    component: ErrorNoChangesComponent,
}];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    declarations: [],
    providers: [],
})
export class AppRoutingModule { }
