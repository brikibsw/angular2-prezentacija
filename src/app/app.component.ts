import { Component } from "@angular/core";

@Component({
    moduleId: module.id.toString(),
    selector: "my-app",
    template: `
        <h1>{{ title }}</h1>
        <nav>
            <a routerLink="/dashboard">Dashboard</a>
            <a routerLink="/heroes">Heroes</a>
        </nav>
        <router-outlet></router-outlet>
    `,
    styleUrls: [ "app.component.css" ]
})
export class AppComponent {}