import { Component, Inject, OnInit } from '@angular/core';
import { PokedexService } from 'src/app/services/pokedex-service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  pokemons: any[] = [];
  pokeDetail: any[] = [];

  constructor(private pokedexService: PokedexService) {}

  getPokemons(): void {
    this.pokedexService.getAllPokemons().subscribe((res: any) => {
      res.map((resPoke: any) => {
        this.pokedexService.getPokemon(resPoke.url).subscribe((poke: any) => {
          this.pokeDetail.push(poke);
          console.log(this.pokeDetail);
        });
      });
      this.pokemons = res;
    });
    // this.pokemons = this.pokedexService.pokemons;
  }

  ngOnInit(): void {
    this.getPokemons();
  }
}
