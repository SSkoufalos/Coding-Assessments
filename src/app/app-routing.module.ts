import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BioComponent } from './bio/bio.component';
import { EducationComponent } from './education/education.component';
import { ExamplesComponent } from './examples/examples.component';
import { HobbiesninterestsComponent } from './hobbiesninterests/hobbiesninterests.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/bio',
    pathMatch: 'full'
  },
  {
    path: 'bio',
    component: BioComponent,
  },
  {
    path: 'education',
    component: EducationComponent,
  },
  {
    path: 'examples',
    component: ExamplesComponent,
  },
  {
    path: 'hobbiesninterests',
    component: HobbiesninterestsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
