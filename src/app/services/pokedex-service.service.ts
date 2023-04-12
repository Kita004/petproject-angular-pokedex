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

  getAllPokemons(): void {
    this.http
      .get<any>(this.baseURL + 'pokemon?limit=10&offset=0')
      .pipe(map((res) => res.results))
      .subscribe((res: any) => {
        res.map((resPoke: any) => {
          this.http.get(resPoke.url).subscribe((poke: any) => {
            this._pokemons.push(poke);
          });
        });
      });
    return;
  }

  getPokemon(name: string): Observable<any> {
    return this.http.get(this.baseURL + 'pokemon/' + name);
  }
}
