import { Component, OnInit } from '@angular/core';

declare var require: any;

var data = require('../../assets/example.JSON');

@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss']
})
export class ExamplesComponent implements OnInit {
  //We're going to place images in here with the same interpolation methods in the JSON file.
  //Double check with Andy if there are further questions, but look it up online too.
  
  constructor() { }

  ngOnInit(): void {
  }

}
