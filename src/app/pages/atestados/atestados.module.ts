import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AtestadosComponent } from './atestados.component';
import { routing } from './atestados.routing';


import { NgaModule } from '../../theme/nga.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { HttpModule } from '@angular/http';

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
    AtestadosComponent
  ]
})
export class AtestadosModule {}