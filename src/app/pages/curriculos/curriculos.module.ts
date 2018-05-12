import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CurriculosComponent } from './curriculos.component';
import { routing } from './curriculos.routing';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing
  ],
  declarations: [
    CurriculosComponent,
   
  ],
  entryComponents: [
   
  ],
  providers: [
  
  ]
})
export class CurriculosModule {}