import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab_irrfComponent } from './tab-irrf.component';
import { routing } from './tab-irrf.routing';
import { HttpModule } from '@angular/http';
import { NgaModule } from '../../theme/nga.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        routing,
        Ng2SmartTableModule,
        HttpModule,
        NgaModule
    ],
    declarations: [
        Tab_irrfComponent
    ]
})
export class Tab_irrfModule { }