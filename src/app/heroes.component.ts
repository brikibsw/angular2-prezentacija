import { Component, OnInit } from '@angular/core';

import { Hero } from "./hero";
import { HeroService } from "./hero.service";

@Component({
  moduleId: module.id.toString(),
  selector: 'my-heroes',
  template: `
    <h2>{{hero.name}} details!</h2>
    <div><label>id: </label>{{hero.id}}</div>
    <div>  

      <h2>My Heroes</h2>
      <ul class="heroes">
        <li *ngFor="let hero of heroes" (click)="onSelect(hero)">
          <span class="badge">{{hero.id}}</span> {{hero.name}}
        </li>
      </ul>

      <my-hero-detail [hero]="selectedHero"></my-hero-detail>

    </div>
    `, 
    styleUrls: [ "heroes.component.css" ]
})
export class HeroesComponent implements OnInit  {

  constructor(private heroService: HeroService) {}

  title = 'Tour of Heroes';

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  selectedHero: Hero;

  heroes: Hero[];

  getHeroes(): void {
    this.heroService.getHeroes()
                    .then(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  ngOnInit() {
    this.getHeroes();
  }



}


