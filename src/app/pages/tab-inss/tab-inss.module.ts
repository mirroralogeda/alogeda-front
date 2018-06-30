import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { TabInssComponent } from './tab-inss.component';
import { TabInssService } from './tab-inss.service';
import { routing } from './tab-inss.routing';
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
  declarations: [TabInssComponent],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: "pt-BR"
    },
    TabInssService
  ]
})
export class TabInssModule { }
