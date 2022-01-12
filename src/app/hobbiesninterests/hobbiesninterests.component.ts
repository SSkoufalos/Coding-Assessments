import {
  Component,
  OnInit
} from '@angular/core';

declare var require: any;

var data = require('../../assets/example.JSON');

@Component({
  selector: 'app-hobbiesninterests',
  templateUrl: './hobbiesninterests.component.html',
  styleUrls: ['./hobbiesninterests.component.scss']
})
export class HobbiesninterestsComponent implements OnInit {
  name = 'Angular';

  favoriteGames: Hobbies[] = [];
  codingGoals: Hobbies[] = [];
  otherHobbies: Hobbies[] = [];

  constructor() {
    this.favoriteGames = data.favoriteGames
    this.codingGoals = data.codingGoals
    this.otherHobbies = data.otherHobbies
  }

  ngOnInit(): void {}

}

export interface Hobbies {
  rpg: string,
  strategy: string,
  sidescroller: string,
  beatemup: string,
  topdown: string,
  flightsim: string,
  arcade: string,
  firstgoal: string,
  secondgoal: string,
  thirdgoal: string,
  fourthgoal: string,
  mainhobby: string,
  secondhobby: string,
  thirdhobby: string,
  fourthhobby: string,
  fifthhobby: string
}
