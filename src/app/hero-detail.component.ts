import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { Location } from "@angular/common";

import { Hero } from "./hero";
import { HeroService } from "./hero.service";

import "rxjs/add/operator/switchMap";

@Component({
  moduleId: module.id.toString(),
  templateUrl: "hero-detail.component.html",
  selector: 'my-hero-detail',
})
export class HeroDetailComponent implements OnInit {
  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  hero: Hero;

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.heroService.getHero(+params["id"]) )
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }
}
