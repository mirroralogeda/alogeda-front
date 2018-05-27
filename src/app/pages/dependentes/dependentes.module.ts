import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DependentesComponent } from './dependentes.component';
import { routing } from './dependentes.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing
  ],
  declarations: [
    DependentesComponent
  ]
})
export class DependentesModule {}