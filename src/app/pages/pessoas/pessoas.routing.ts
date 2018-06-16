import { Routes, RouterModule } from "@angular/router";

import { PessoasComponent } from "./pessoas.component";

const routes: Routes = [
  {
    path: "",
    component: PessoasComponent
  }
];

export const routing = RouterModule.forChild(routes);
