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
    this.highschools = data.education.highschools
    this.colleges = data.education.colleges
  }

  ngOnInit(): void {}

}

export interface Education {
  name: string;
  years: number;
  degree: string;
  major: string;
}
