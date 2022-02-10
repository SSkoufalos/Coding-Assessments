import {
  HttpClient
} from '@angular/common/http'; //Ensure these are properly imported under the app.module.ts file.
import {
  Component,
  OnInit
} from '@angular/core';

declare var require: any;

var data = require('../../assets/example.JSON');

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
        console.log(JSON.stringify(this.OurPokemon));
      }, (err) => {},
      () => console.log('finished')
    );

  }
}
