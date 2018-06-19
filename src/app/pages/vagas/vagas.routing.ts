import { Routes, RouterModule } from '@angular/router';

import { VagasComponent } from './vagas.component';

const routes: Routes = [
  {
    path: '',
    component: VagasComponent
  }
];

export const routing = RouterModule.forChild(routes);
