import { Routes, RouterModule } from '@angular/router';

import { FolhaComponent } from './folha.component';

const routes: Routes = [
  {
    path: '',
    component: FolhaComponent
  }
];

export const routing = RouterModule.forChild(routes);
