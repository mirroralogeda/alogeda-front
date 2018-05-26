import { Routes, RouterModule }  from '@angular/router';
import { Pages } from './pages.component';
import { ModuleWithProviders } from '@angular/core';
// noinspection TypeScriptValidateTypes

// export function loadChildren(path) { return System.import(path); };

export const routes: Routes = [
  {
    path: 'login',
    loadChildren: 'app/pages/login/login.module#LoginModule'
  },
  {
    path: 'register',
    loadChildren: 'app/pages/register/register.module#RegisterModule'
  },
  {
    path: 'pages',
    component: Pages,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
      { path: 'curriculos',  loadChildren: './curriculos/curriculos.module#CurriculosModule'},
      { path: 'editors', loadChildren: './editors/editors.module#EditorsModule' },
      { path: 'components', loadChildren: './components/components.module#ComponentsModule' },
      { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
      { path: 'ui', loadChildren: './ui/ui.module#UiModule' },
      { path: 'forms', loadChildren: './forms/forms.module#FormsModule' },
      { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
      { path: 'maps', loadChildren: './maps/maps.module#MapsModule' },
      { path: 'cadastros/cidades', loadChildren: './cidades/cidades.module#CidadesModule' },
      { path: 'cadastros/setores', loadChildren: './setores/setores.module#SetoresModule' },
      { path: 'cadastros/cargos', loadChildren: './cargos/cargos.module#CargosModule' },
      { path: 'cadastros/tab-irrf', loadChildren: './tab-irrf/tab-irrf.module#Tab_irrfModule' }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
