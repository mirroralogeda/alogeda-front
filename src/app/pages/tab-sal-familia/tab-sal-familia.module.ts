import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { TabSalFamiliaComponent } from './tab-sal-familia.component';
import { TabSalFamiliaService } from './tab-sal-familia.service';
import { routing } from './tab-sal-familia.routing';
import { HttpModule } from '@angular/http';
import { NgaModule } from '../../theme/nga.module';
import {LOCALE_ID} from '@angular/core';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        routing,
        HttpModule,
        NgaModule
    ],
    declarations: [ TabSalFamiliaComponent ],
				providers: [
          {
            provide: LOCALE_ID,
            useValue: "pt-BR"
          },
          TabSalFamiliaService
        ]
    })
export class TabSalFamiliaModule { }
