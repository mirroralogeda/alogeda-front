import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { VagasComponent } from './vagas.component';
import { routing } from './vagas.routing';

import { NgaModule } from '../../theme/nga.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
    NgaModule,
    HttpModule
  ],
  declarations: [
    VagasComponent
  ]
})
export class VagasModule {}
