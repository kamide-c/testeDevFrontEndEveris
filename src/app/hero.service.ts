import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import "rxjs/add/operator/toPromise";

import { HeroModel } from "./hero.model";

@Injectable()
export class HeroService {
  constructor(private http: Http) { }

  list() {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");

    return this.http.get("http://www.mocky.io/v2/5b2971722f00006300f561a9", {
      headers: headers
    })
    .toPromise()
    .then((res: Response) => {
      let data = res.json();
      let allHero = [];

      data.forEach((entry) => {
        let hero = new HeroModel();
        hero.name = entry.name;
        hero.height = entry.height;
        hero.mass = entry.mass;
        hero.hair_color = entry.hair_color;
        hero.skin_color = entry.skin_color;
        hero.eye_color = entry.eye_color;
        hero.birth_year = entry.birth_year;
        hero.gender = entry.gender;
        allHero.push(hero);
      });

      return allHero;
    })
    .catch(this.handleError);
  }

  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || "";
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ""} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Promise.reject(errMsg);
  }
}
