import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { GrupoEventosComponent } from "./grupo-eventos.component";
import { routing } from "./grupo-eventos.routing";

import { NgaModule } from "../../theme/nga.module";
import { Ng2SmartTableModule } from "ng2-smart-table";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    Ng2SmartTableModule,
    routing,
    HttpModule,
    NgaModule
  ],
  declarations: [GrupoEventosComponent]
})
export class GrupoEventosModule {}
