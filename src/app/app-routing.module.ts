import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BioComponent } from './bio/bio.component';
import { EducationComponent } from './education/education.component';
import { ExamplesComponent } from './examples/examples.component';
import { HobbiesninterestsComponent } from './hobbiesninterests/hobbiesninterests.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
