import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { EventosFixosComponent } from "./eventosFixos.component";
import { routing } from "./eventosFixos.routing";
import { NgaModule } from "../../theme/nga.module";
import { Ng2SmartTableModule } from "ng2-smart-table";
import { EventosFixosService } from "./eventosFixos.service";
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
  declarations: [EventosFixosComponent],
  providers: [EventosFixosService, GrupoEventosService]
})
export class EventosFixosModule {}
