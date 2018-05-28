import { Routes, RouterModule } from '@angular/router';

import { CidadesComponent } from './cidades.component';

const routes: Routes = [
  {
    path: '',
    component: CidadesComponent
  }
];

export const routing = RouterModule.forChild(routes);