import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CurriculosComponent } from './curriculos.component';
import { routing } from './curriculos.routing';


// import { NgaModule } from '../../theme/nga.module';
// import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
// import { NgbDropdownModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

// import { Ui } from '../ui/ui.component';
// import { Buttons } from '../ui/components/buttons/buttons.component';
// import { Grid } from '../ui/components/grid/grid.component';
// import { Icons } from '../ui/components/icons/icons.component';
// import { Modals } from '../ui/components/modals/modals.component';
// import { SlimComponent } from '../ui/components/slim/slim.component';
// import { Typography } from '../ui/components/typography/typography.component';

// import { FlatButtons } from '../ui/components/buttons/components/flatButtons';
// import { RaisedButtons } from '../ui/components/buttons/components/raisedButtons';
// import { SizedButtons } from '../ui/components/buttons/components/sizedButtons';
// import { DisabledButtons } from '../ui/components/buttons/components/disabledButtons';
// import { IconButtons } from '../ui/components/buttons/components/iconButtons';
// import { LargeButtons } from '../ui/components/buttons/components/largeButtons';
// import { DropdownButtons } from '../ui/components/buttons/components/dropdownButtons';
// import { GroupButtons } from '../ui/components/buttons/components/groupButtons';
// import { IconsService } from '../ui/components/icons/icons.service';
// import { DefaultModal } from '../ui/components/modals/default-modal/default-modal.component';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing,
    CommonModule,
    FormsModule,
    // NgaModule,
    // NgbDropdownModule,
    // NgbModalModule,
    // SlimLoadingBarModule.forRoot(),
    // routing
  ],
  declarations: [
    CurriculosComponent,
    // Buttons,
    // Grid,
    // Icons,
    // Modals,
    // SlimComponent,
    // Typography,
    // Ui,
    // FlatButtons,
    // RaisedButtons,
    // SizedButtons,
    // DisabledButtons,
    // IconButtons,
    // LargeButtons,
    // DropdownButtons,
    // GroupButtons,
    // DefaultModal
  // ],
  // entryComponents: [
  //   DefaultModal
  // ],
  // providers: [
  //   IconsService
  ]
})
export class CurriculosModule {}