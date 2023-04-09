import { Component, Inject, OnInit } from '@angular/core';
import { PokedexService } from 'src/app/services/pokedex-service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  pokemons: any[] = [];

  constructor(private pokedexService: PokedexService) {}

  getPokemons(): void {
    this.pokedexService.getAllPokemons().subscribe((response) => {
      this.pokemons = response;
      console.log(response);
    });
  }

  ngOnInit(): void {
    this.getPokemons();
  }
}
