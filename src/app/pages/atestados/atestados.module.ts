import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AtestadosComponent } from './atestados.component';
import { routing } from './atestados.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing
  ],
  declarations: [
    AtestadosComponent
  ]
})
export class AtestadosModule {}