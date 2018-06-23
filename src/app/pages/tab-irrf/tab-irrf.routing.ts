import { Routes, RouterModule } from '@angular/router';

import { TabIrrfComponent } from './tab-irrf.component';

const routes: Routes = [
  {
    path: '',
    component: TabIrrfComponent
  }
];

export const routing = RouterModule.forChild(routes);
