import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http"

import "rxjs/add/operator/toPromise";

import { Hero } from './hero';

@Injectable()
export class HeroService {

    private heroesurl = "app/heroes"; // URL to web api

    constructor(private http: Http) {}

    getHeroes(): Promise<Hero[]> {
        return this.http.get(this.heroesurl)
                   .toPromise() // because the http.get returns an RxJS Observable
                   .then(response => response.json().data as Hero[])  // extracts the data from response
                   .catch(this.handleError)
    }

    getHero(id: number): Promise<Hero> {
        return this.getHeroes()
                    .then(heroes => heroes.find(hero => hero.id === id));
    }

    private handleError(error: any): Promise<any> {
        console.log("Error has occured", error);
        return Promise.reject(error.message || error)
    }
}