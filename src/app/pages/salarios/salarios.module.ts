import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SalariosComponent, CheckboxEditorComponent, CheckboxViewComponent } from './salarios.component';
import { routing } from './salarios.routing';


import { NgaModule } from '../../theme/nga.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { HttpModule } from '@angular/http';
import { DateEditorComponent, DateViewComponent } from './salarios.component';

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
    SalariosComponent,
    DateEditorComponent,
    DateViewComponent,
    CheckboxEditorComponent,
    CheckboxViewComponent
  ]
})
export class SalariosModule {}