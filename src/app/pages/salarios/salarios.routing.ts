import { Routes, RouterModule } from '@angular/router';

import { SalariosComponent } from './salarios.component';

const routes: Routes = [
  {
    path: ':id',
    component: SalariosComponent
  }
];

export const routing = RouterModule.forChild(routes);