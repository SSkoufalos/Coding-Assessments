import {
  Component,
  OnInit
} from '@angular/core';

declare var require: any;

var data = require('../../assets/example.JSON'); //The ../ is for each level of the folders. This requires two.
//This is going to go up through the app and bio folders to reach to the src folder, where the asset file is located.
@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.scss']
})
export class BioComponent implements OnInit {
  name = 'Angular';

  bio: Information[] = [{
    name: 'Steve Skoufalos',
    age: 33,
    gender: 'Male',
    location: 'Haddonfield, NJ'
  }];

  constructor() {
    console.log(JSON.stringify(data))
  }

  ngOnInit(): void {}

}

export interface Information {
  name: string;
  age: number;
  gender: string;
  location: string;
}
