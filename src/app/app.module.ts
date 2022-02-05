import { NzButtonModule } from 'ng-zorro-antd/button';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BioComponent } from './bio/bio.component';
import { EducationComponent } from './education/education.component';
import { ExamplesComponent } from './examples/examples.component';
import { HobbiesninterestsComponent } from './hobbiesninterests/hobbiesninterests.component';
import { PokemonComponent } from './pokemon/pokemon.component';

@NgModule({
  declarations: [
    AppComponent,
    BioComponent,
    EducationComponent,
    ExamplesComponent,
    HobbiesninterestsComponent,
    PokemonComponent,
  ],
  imports: [
    BrowserModule,
    NzButtonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
