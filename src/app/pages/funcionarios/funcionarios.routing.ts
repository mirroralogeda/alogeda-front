import { Routes, RouterModule } from '@angular/router';
import { FuncionariosComponent } from './funcionarios.component';

const routes: Routes = [
    {
        path: '',
        component: FuncionariosComponent
    }
];
export const routing = RouterModule.forChild(routes);
