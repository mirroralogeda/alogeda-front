import { Routes, RouterModule } from '@angular/router';

import { Tab_irrfComponent } from './tab-irrf.component';

const routes: Routes = [
  {
    path: '',
    component: Tab_irrfComponent
  }
];

export const routing = RouterModule.forChild(routes);