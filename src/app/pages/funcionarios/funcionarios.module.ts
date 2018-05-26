import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FuncionariosComponent } from './funcionarios.component';
import { routing } from './funcionarios.routing';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        routing
    ],
    declarations: [
        FuncionariosComponent
    ]
})
export class FuncionariosModule { }