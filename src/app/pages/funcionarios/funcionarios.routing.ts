import { Routes, RouterModule } from '@angular/router';
import { FuncionariosComponent } from './funcionarios.component';
import { FuncionariosEdicaoComponent } from './funcionarios-edicao.component';

const routes: Routes = [
    {
        path: '',
        component: FuncionariosComponent
    },
    {
        path: 'add',
        component: FuncionariosEdicaoComponent
    },
    {
        path: 'edit/:id',
        component: FuncionariosEdicaoComponent
    }
];
export const routing = RouterModule.forChild(routes);
