import { Routes, RouterModule } from '@angular/router';

import { SetoresComponent } from './setores.component';

const routes: Routes = [
  {
    path: '',
    component: SetoresComponent
  }
];

export const routing = RouterModule.forChild(routes);
