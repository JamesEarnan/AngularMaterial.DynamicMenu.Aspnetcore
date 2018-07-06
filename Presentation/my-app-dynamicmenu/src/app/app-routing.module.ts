import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { ForthContentComponent } from "./forth-content/forth-content.component";
import { FirstContentComponent } from "./first-content/first-content.component";
import { SecondContentComponent } from "./second-content/second-content.component";
import { ThirdContentComponent } from "./third-content/third-content.component";
import { FifthContentComponent } from "./fifth-content/fifth-content.component";
import { SixthContentComponent } from "./sixth-content/sixth-content.component";

const appRoutes: Routes = [
    // { path: "**", component: NotFoundComponent, data: { title: "Page Not Found" } },
    { path: "home", redirectTo: "/", pathMatch: "full" },
    { path: 'FirstContent', component: FirstContentComponent },
    { path: 'SecondContent', component: SecondContentComponent },
    { path: 'ThirdContent', component: ThirdContentComponent },
    { path: 'ForthContent', component: ForthContentComponent },
    { path: 'FifthContent', component: FifthContentComponent },
    { path: 'SixthContent', component: SixthContentComponent },
  ];

  @NgModule({
    imports: [
      RouterModule.forRoot(
        appRoutes,
        { enableTracing: true } // <-- debugging purposes only
      )
    ],
    exports: [
        RouterModule
    ],
  })
  export class AppRoutingModule { }