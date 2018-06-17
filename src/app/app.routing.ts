import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

export const routes: Routes = [
  { path: "", redirectTo: "pages/curriculos", pathMatch: "full" },
  { path: "**", redirectTo: "pages/curriculos" },
  { path: "", redirectTo: "/pages", pathMatch: "full" },
  
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {
  useHash: true
});
