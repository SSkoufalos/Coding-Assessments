import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'],
})
export class AppComponent implements OnInit {
  OurPokemon: any = {};

  pokemonUrl = 'https://pokeapi.co/api/v2/pokemon/porygon';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get(this.pokemonUrl).subscribe((data) => {
      this.OurPokemon = data;
    });
  }
}