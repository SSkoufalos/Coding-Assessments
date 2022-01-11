import { Component, OnInit } from '@angular/core';

declare var require: any;

var data = require('../assets/example.JSON');


@Component({
  selector: 'app-root',
  templateUrl: './app.component updated.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myresume';
  constructor() {
    console.log(JSON.stringify(data))
  }
}