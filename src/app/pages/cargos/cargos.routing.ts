import { Routes, RouterModule } from '@angular/router';

import { CargosComponent } from './cargos.component';

const routes: Routes = [
  {
    path: '',
    component: CargosComponent
  }
];

export const routing = RouterModule.forChild(routes);
