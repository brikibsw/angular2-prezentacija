import { Component } from "@angular/core";

@Component({
    moduleId: module.id.toString(),
    selector: "my-app",
    template: `
        <h1>{{ title }}</h1>
        <a routerLink="/heroes">Heroes</a>
        <router-outlet></router-outlet>
    `,
    styleUrls: [ "app.component.css" ]
})
export class AppComponent {}