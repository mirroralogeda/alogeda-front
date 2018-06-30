import { Routes, RouterModule } from '@angular/router';
import { TabInssComponent } from './tab-inss.component';

const routes: Routes = [
  {
    path: '',
    component: TabInssComponent
  }
];

export const routing = RouterModule.forChild(routes);
