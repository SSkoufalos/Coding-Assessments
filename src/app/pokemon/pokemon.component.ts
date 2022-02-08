import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
})
export class PokemonComponent implements OnInit {
name = 'Angular';

  OurPokemon: any = {};

  pokemonUrl = 'https://pokeapi.co/api/v2/pokemon/porygon';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get(this.pokemonUrl).subscribe((data) => {
      this.OurPokemon = data;
    });
  }
}