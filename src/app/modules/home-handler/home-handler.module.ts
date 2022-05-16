import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeLoggedInComponent } from 'src/app/components/homeloggedin/homeloggedin.component';
import { HomeLoggedOutComponent } from 'src/app/components/homeloggedout/homeloggedout.component';
import { RouterModule, ROUTES, Routes } from '@angular/router';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [
    {
      provide: ROUTES,
      useFactory: configHomeHandlerRoutes,
      multi: true
    }
  ]
})
export class HomeHandlerModule {}

export function configHomeHandlerRoutes() {
  let routes: Routes = [];
  //TODO: IF LOGGED IN
  if (false) {
    routes = [
      {
        path: "", component: HomeLoggedInComponent
      }
    ]
  }else {
    routes = [
      {
        path: "", component: HomeLoggedOutComponent
      }
    ]
  }
  return routes;
}
