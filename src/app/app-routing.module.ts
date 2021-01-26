import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpCallTestsComponent } from './http-call-tests/http-call-tests.component';

const routes: Routes = [{
    path: "",
    redirectTo: "http-call",
    pathMatch: "full",
}, {
    path: "http-call",
    component: HttpCallTestsComponent,
}];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    declarations: [],
    providers: [],
})
export class AppRoutingModule { }
