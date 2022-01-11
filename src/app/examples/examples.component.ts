import { Component, OnInit } from '@angular/core';

declare var require: any;

var data = require('../../assets/example.JSON');

@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss']
})
export class ExamplesComponent implements OnInit {
  //Gotta ask Andy about this section. See if it's any different for JS applications...
  
  constructor() { }

  ngOnInit(): void {
  }

}
