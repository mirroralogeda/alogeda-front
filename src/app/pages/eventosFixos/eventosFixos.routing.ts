import { Routes, RouterModule } from "@angular/router";

import { EventosFixosComponent } from "./eventosFixos.component";

const routes: Routes = [
  {
    path: "",
    component: EventosFixosComponent
  }
];

export const routing = RouterModule.forChild(routes);
