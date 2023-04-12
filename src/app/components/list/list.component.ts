import { Component, Inject, OnInit } from '@angular/core';
import { RouterTestingHarness } from '@angular/router/testing';
import { concat, concatMap, mergeMap, mergeMapTo } from 'rxjs';
import { PokedexService } from 'src/app/services/pokedex-service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  pokemons: any[] = [];
  pokeDetails: any[] = [];

  constructor(private pokedexService: PokedexService) {}

  // doesnt work <3 inside map > shows array (10), outside > shows [], cuz not async?
  getPokemons(): void {
    this.pokedexService.getAllPokemons();
    this.pokemons = this.pokedexService.pokemons;
  }

  // loadPokemons(): void {
  //   this.pokedexService
  //     .getAllPokemons()
  //     .pipe((res: any) => {
  //       return this.pokedexService.getPokemon(res.url);
  //     })
  //     .subscribe((res: any) => this.pokemons.push(res));
  // }

  ngOnInit(): void {
    this.getPokemons();
    // this.loadPokemons();
  }
}
