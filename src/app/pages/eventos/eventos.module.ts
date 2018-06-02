import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { EventosComponent } from "./eventos.component";
import { routing } from "./eventos.routing";

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
  declarations: [EventosComponent]
})
export class EventosModule {}
