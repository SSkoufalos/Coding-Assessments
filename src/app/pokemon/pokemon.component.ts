import { 
Component, 
OnInit 
} from '@angular/core';

declare var require: any;

var data = require('../../assets/example.JSON');

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {
  name = 'Angular';

  constructor() { }

  ngOnInit(): void {
  }

}
