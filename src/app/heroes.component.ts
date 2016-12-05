import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { Hero } from "./hero";
import { HeroService } from "./hero.service";

@Component({
  moduleId: module.id.toString(),
  selector: 'my-heroes',
  templateUrl: "heroes.component.html", 
    styleUrls: [ "./heroes.component.css" ]
})
export class HeroesComponent implements OnInit  {

  constructor(
    private heroService: HeroService,
    private router: Router
    ) {}

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

  gotoDetail(): void {
    this.router.navigate(["/detail", this.selectedHero.id]);
  }

  ngOnInit() {
    this.getHeroes();
  }



}


