import { Routes, RouterModule } from '@angular/router';

import { CurriculosComponent } from './curriculos.component';


import { Ui } from '../ui/ui.component';
import { Buttons } from '../ui/components/buttons/buttons.component';
import { Grid } from '../ui/components/grid/grid.component';
import { Icons } from '../ui/components/icons/icons.component';
import { Modals } from '../ui/components/modals/modals.component';
import { Typography } from '../ui/components/typography/typography.component';
import { SlimComponent } from '../ui/components/slim/slim.component';

const routes: Routes = [
  {
    path: '',
    component: CurriculosComponent
  }
];

export const routing = RouterModule.forChild(routes);