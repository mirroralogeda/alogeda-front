import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { TabSalFamiliaComponent } from './tab-sal-familia.component';
import { TabSalFamiliaService } from './tab-sal-familia.service';
import { routing } from './tab-sal-familia.routing';
import { HttpModule } from '@angular/http';
import { NgaModule } from '../../theme/nga.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        routing,
        HttpModule,
        NgaModule
    ],
    declarations: [ TabSalFamiliaComponent ],
				providers: [ TabSalFamiliaService ]
    })
export class TabSalFamiliaModule { }
