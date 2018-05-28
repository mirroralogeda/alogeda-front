import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabSalFamiliaComponent } from './tab-sal-familia.component';
import { routing } from './tab-sal-familia.routing';
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
        TabSalFamiliaComponent
    ]
})
export class TabSalFamiliaModule { }