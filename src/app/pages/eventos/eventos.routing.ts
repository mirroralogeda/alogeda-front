import { Routes, RouterModule } from "@angular/router";

import { EventosComponent } from "./eventos.component";

const routes: Routes = [
  {
    path: "",
    component: EventosComponent
  }
];

export const routing = RouterModule.forChild(routes);
