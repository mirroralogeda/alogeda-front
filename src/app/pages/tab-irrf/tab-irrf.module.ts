import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { TabIrrfComponent } from './tab-irrf.component';
import { TabIrrfService } from './tab-irrf.service';
import { routing } from './tab-irrf.routing';
import { HttpModule } from '@angular/http';
import { NgaModule } from '../../theme/nga.module';
import { LOCALE_ID } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing,
    HttpModule,
    NgaModule
  ],
  declarations: [TabIrrfComponent],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: "pt-BR"
    },
    TabIrrfService
  ]
})
export class TabIrrfModule { }
