import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { PessoasComponent } from "./pessoas.component";
import { routing } from "./pessoas.routing";
import { NgaModule } from "../../theme/nga.module";
import { Ng2SmartTableModule } from "ng2-smart-table";
import { PessoasService } from "./pessoas.service";
import { GrupoEventosService } from "../grupo-eventos/grupo-eventos.service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing,
    HttpModule,
    NgaModule,
    ReactiveFormsModule
  ],
  declarations: [PessoasComponent],
  providers: [PessoasService, GrupoEventosService]
})
export class PessoasModule {}
