import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { EventosComponent } from "./eventos.component";
import { routing } from "./eventos.routing";
import { NgaModule } from "../../theme/nga.module";
import { Ng2SmartTableModule } from "ng2-smart-table";
import { EventosService } from "./eventos.service";
import { GrupoEventosService } from "../grupo-eventos/grupo-eventos.service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    Ng2SmartTableModule,
    routing,
    HttpModule,
    NgaModule,
    ReactiveFormsModule
  ],
  declarations: [EventosComponent],
  providers: [EventosService, GrupoEventosService]
})
export class EventosModule {}
