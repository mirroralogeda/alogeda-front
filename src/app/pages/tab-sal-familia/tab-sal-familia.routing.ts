import { Routes, RouterModule } from '@angular/router';

import { TabSalFamiliaComponent } from './tab-sal-familia.component';

const routes: Routes = [
  {
    path: '',
    component: TabSalFamiliaComponent
  }
];

export const routing = RouterModule.forChild(routes);