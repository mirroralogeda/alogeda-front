import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { FolhaComponent } from './folha.component';
import { FolhaService } from './folha.service';
import { routing } from './folha.routing';
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
    declarations: [ FolhaComponent ],
				providers: [
          {
            provide: LOCALE_ID,
            useValue: "pt-BR"
          },
          FolhaService
        ]
    })
export class FolhaModule { }
