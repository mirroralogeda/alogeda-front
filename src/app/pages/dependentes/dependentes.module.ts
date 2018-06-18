import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DependentesComponent, CheckboxEditorComponent, CheckboxViewComponent } from './dependentes.component';
import { routing } from './dependentes.routing';


import { NgaModule } from '../../theme/nga.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { HttpModule } from '@angular/http';
import { DateEditorComponent, DateViewComponent } from './dependentes.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing,
    
    Ng2SmartTableModule,
    routing,
    HttpModule,
    NgaModule
  ],
  declarations: [
    DependentesComponent,
    DateEditorComponent,
    DateViewComponent,
    CheckboxEditorComponent,
    CheckboxViewComponent
  ]
})
export class DependentesModule {}