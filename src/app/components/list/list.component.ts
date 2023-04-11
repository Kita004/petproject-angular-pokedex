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
    this.pokedexService.getAllPokemons().subscribe((res: any) => {
      res.map((resPoke: any) => {
        this.pokedexService.getPokemon(resPoke.url).subscribe((poke: any) => {
          this.pokemons.push(poke);
        });
      });
    });
    // this.pokemons = this.pokedexService.pokemons;
  }

  loadPokemons(): void {
    this.pokedexService.getAllPokemons().pipe();
  }

  loadV2(): void {
    this.pokedexService.getAllPokemons().subscribe((res: any) =>
      res.map((val: any) => {
        this.pokeDetails.push(val.url);
      })
    );
  }

  ngOnInit(): void {
    this.getPokemons();
    // this.loadPokemons();
    // this.loadV2();
  }
}
