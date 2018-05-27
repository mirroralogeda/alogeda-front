import { Routes, RouterModule } from '@angular/router';

import { DependentesComponent } from './dependentes.component';

const routes: Routes = [
  {
    path: '',
    component: DependentesComponent
  }
];

export const routing = RouterModule.forChild(routes);