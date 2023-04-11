import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokedexService {
  private baseURL: string = 'https://pokeapi.co/api/v2/';
  private _pokemons: any[] = [];

  constructor(private http: HttpClient) {}

  get pokemons(): any[] {
    return this._pokemons;
  }

  getAllPokemons(): Observable<any> {
    return this.http
      .get<any>(this.baseURL + 'pokemon?limit=151&offset=0')
      .pipe(map((res) => res.results));
  }

  getPokemon(url: string): Observable<any> {
    return this.http.get(url);
  }
}
