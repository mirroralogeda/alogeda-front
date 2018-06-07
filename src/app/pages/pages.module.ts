import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { routing } from "./pages.routing";
import { NgaModule } from "../theme/nga.module";
import { AppTranslationModule } from "../app.translation.module";
import { Pages } from "./pages.component";
import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from "./forms/forms.module";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
  imports: [
    CommonModule,
    AppTranslationModule,
    NgaModule,
    routing,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule
  ],
  declarations: [Pages]
})
export class PagesModule {}
