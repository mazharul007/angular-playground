import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: "",
    pathMatch: "full",
    redirectTo: "home"
  },
  {
    path: "home",
    loadChildren: () => import("./pages/home-page/home-page.module").then((m) => m.HomePageModule)
  },
  {
    path: "about",
    loadChildren: () => import("./pages/about-page/about-page.module").then((m) => m.AboutPageModule)
  },
  {
    path: "details",
    loadChildren: () => import("./pages/details-page/details-page.module").then((m) => m.DetailsPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
