import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from './app.component';
import { HeroesComponent } from "./heroes.component"; 
import { HeroDetailComponent } from "./hero-detail.component";
import { HeroService } from "./hero.service";

import { DashboardComponent } from "./dashboard.component";

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: "",
        redirectTo: "/dashboard", 
        pathMatch: "full"
      },
      {
        path: "heroes",
        component: HeroesComponent
      },
      {
        path: "dashboard",
        component: DashboardComponent
      },
      {
        path: "detail/:id",
        component: HeroDetailComponent
      }
    ])
  ],
  providers: [
    HeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
