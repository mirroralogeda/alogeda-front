import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { Ng2SmartTableModule } from 'ng2-smart-table';


import { CurriculosComponent } from './curriculos.component';
import { routing } from './curriculos.routing';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    ReactiveFormsModule,
    Ng2SmartTableModule,
    routing,
  ],
  declarations: [
    CurriculosComponent
  ]
})
export class CurriculosModule {}
