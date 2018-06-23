import { Routes, RouterModule } from '@angular/router';

import { SelecaoComponent } from './selecao.component';

const routes: Routes = [
  {
    path: '',
    component: SelecaoComponent
  }
];

export const routing = RouterModule.forChild(routes);
