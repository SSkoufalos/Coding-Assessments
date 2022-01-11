import {
  Component,
  OnInit
} from '@angular/core';

declare var require: any;

var data = require('../../assets/example.JSON');

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  name = 'Angular';

  highschools: Education[] = [];
  colleges: Education[] = [];

  constructor() {
    this.highschools = data.education.highschools //These sections link up to the corresponding strings in the JSON file.
    this.colleges = data.education.colleges //Bear in mind that strings in JSON have double quotes.
  }

  ngOnInit(): void {}

}

export interface Education {
  name: string;
  years: number;
  degree: string;
  major: string;
}
