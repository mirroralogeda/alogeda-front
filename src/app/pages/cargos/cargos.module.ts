import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { CargosComponent } from './cargos.component';
import { routing } from './cargos.routing';

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
    CargosComponent
  ]
})
export class CargosModule {}
