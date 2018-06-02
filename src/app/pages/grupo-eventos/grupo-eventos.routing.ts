import { Routes, RouterModule } from "@angular/router";

import { GrupoEventosComponent } from "./grupo-eventos.component";

const routes: Routes = [
  {
    path: "",
    component: GrupoEventosComponent
  }
];

export const routing = RouterModule.forChild(routes);
