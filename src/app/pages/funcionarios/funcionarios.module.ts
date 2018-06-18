import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { FuncionariosComponent } from './funcionarios.component';
import { NgaModule } from "../../theme/nga.module";
import { routing } from './funcionarios.routing';
import { Ng2SmartTableModule } from "ng2-smart-table";
import { FuncionarioService } from './funcionarios.service';
import { FuncionariosEdicaoComponent } from './funcionarios-edicao.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        routing,
        HttpModule,
        Ng2SmartTableModule,
        // NgaModule,
        ReactiveFormsModule
    ],
    declarations: [
        FuncionariosComponent,
        FuncionariosEdicaoComponent,
    ],
    providers:[ FuncionarioService ]
})
export class FuncionariosModule { }