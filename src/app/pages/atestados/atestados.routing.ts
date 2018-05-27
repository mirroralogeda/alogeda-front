import { Routes, RouterModule } from '@angular/router';

import { AtestadosComponent } from './atestados.component';

const routes: Routes = [
  {
    path: '',
    component: AtestadosComponent
  }
];

export const routing = RouterModule.forChild(routes);