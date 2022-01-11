import { Component, OnInit } from '@angular/core';

declare var require: any;

var data = require('../../assets/example.JSON'); //Ask Andy about this as well. Is this in the right place?

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.scss']
})
export class BioComponent implements OnInit {
  name = 'Angular';

  bio: Information [] = [
  {
    name: 'Steve Skoufalos',
    age: 33,
    gender: 'Male',
  }
  ];

  constructor() {
    console.log(JSON.stringify(data))
  }

  ngOnInit(): void {
  }

}

export interface Information {
  name: string;
  age: number;
  gender: string;
}
