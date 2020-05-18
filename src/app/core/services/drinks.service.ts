import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cocktail } from '../interfaces';
@Injectable({
  providedIn: 'root'
})
export class DrinksService {
  private url = 'https://www.thecocktaildb.com/api/json/v1/1/';
  constructor(private http: HttpClient) { }
  getCoctails(): Observable<Cocktail> {
    return this.http.get<Cocktail>(`${this.url}random.php`);
  }
  getCoctail(id): any {
    return this.http.get(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    );
  }
  // getCoctail(id): any {
  //   return this.http.get<Cocktail>(`${this.url}/${id}`);
  // }
  getSearch(search: string): any {
    return this.http.get(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`
    );
}
getRandom(): any {
  return this.http.get(`${this.url}random.php`);
}
}
