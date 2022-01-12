import {
  Component,
  OnInit
} from '@angular/core';

declare var require: any;

var data = require('../../assets/example.JSON'); //The ../ is for each level of the folders. This requires two.
//This is going to go up through the app and bio folders to reach to the src folder, where the asset file is
@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.scss']
})
export class BioComponent implements OnInit {
  name = 'Angular';

  bio: Information[] = [];
  codeExperience: Information[] = [];
  workExperience: Information[] = [];

  constructor() {
    this.bio = data.bio
    this.codeExperience = data.codeExperience
    this.workExperience = data.workExperience
  }

  ngOnInit(): void {}

}

export interface Information {
  name: string;
  city: string;
  zip: string;
  email: string;
  html: string;
  css: string;
  javascript: string;
  role: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
}
