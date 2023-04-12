import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokedexService } from 'src/app/services/pokedex-service.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent {
  pokemon: any = null;

  constructor(
    private route: ActivatedRoute,
    private pokedexService: PokedexService
  ) {}

  getPokemonDetail(): void {
    const name = String(this.route.snapshot.paramMap.get('name'));
    console.log(name);
    this.pokedexService
      .getPokemon(name)
      .subscribe((pokemon) => (this.pokemon = pokemon));
  }

  ngOnInit(): void {
    this.getPokemonDetail();
    console.log(this.pokemon.id);
  }
}
