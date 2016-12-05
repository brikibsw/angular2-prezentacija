import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http"

import "rxjs/add/operator/toPromise";

import { Hero } from './hero';

@Injectable()
export class HeroService {

    private headers = new Headers({"Content-Type": "application/json" });

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

    update(hero: Hero): Promise<Hero> {
        const url = `${this.heroesurl}/${hero.id}`;
        return this.http
            .put(url, JSON.stringify(hero), {headers: this.headers})
            .toPromise()
            .then(() => hero)
            .catch(this.handleError);
    }

    create(name: string): Promise<Hero> {
        return this.http
            .post(this.heroesurl, JSON.stringify({name: name}), {headers: this.headers})
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }

    delete(id: number): Promise<void> {
        const url = `${this.heroesurl}/${id}`;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.log("Error has occured", error);
        return Promise.reject(error.message || error)
    }
}