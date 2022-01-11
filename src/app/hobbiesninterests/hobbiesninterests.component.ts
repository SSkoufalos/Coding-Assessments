import { Component, OnInit } from '@angular/core';

declare var require: any;

var data = require('../../assets/example.JSON');

@Component({
  selector: 'app-hobbiesninterests',
  templateUrl: './hobbiesninterests.component.html',
  styleUrls: ['./hobbiesninterests.component.scss']
})
export class HobbiesninterestsComponent implements OnInit {

//Gonna put some images and lists here. Probably.

  constructor() { }

  ngOnInit(): void {
  }

}
