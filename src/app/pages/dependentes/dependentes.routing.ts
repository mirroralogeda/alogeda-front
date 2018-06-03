import { Routes, RouterModule } from '@angular/router';

import { DependentesComponent } from './dependentes.component';

const routes: Routes = [
  {
    path: ':id',
    component: DependentesComponent
  }
];

export const routing = RouterModule.forChild(routes);