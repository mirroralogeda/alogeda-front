import { Routes, RouterModule } from "@angular/router";
import { Pages } from "./pages.component";
import { ModuleWithProviders } from "@angular/core";

export const routes: Routes = [
  {
    path: "login",
    loadChildren: "app/pages/login/login.module#LoginModule"
  },
  // {
  //   path: 'register',
  //   loadChildren: 'app/pages/register/register.module#RegisterModule'
  // },
  { path: "", redirectTo: "/pages", pathMatch: "full" },
  {
    path: "pages",
    component: Pages,
    children: [
      { path: "", redirectTo: "curriculos", pathMatch: "full" },
      {
        path: "dashboard",
        loadChildren: "./dashboard/dashboard.module#DashboardModule"
      },
      {
        path: "recrutamento/curriculos",
        loadChildren: "./curriculos/curriculos.module#CurriculosModule"
      },
      {
        path: "recrutamento/selecao",
        loadChildren: "./selecao/selecao.module#SelecaoModule"
      },
      // {
      //   path: "editors",
      //   loadChildren: "./editors/editors.module#EditorsModule"
      // },
      // {
      //   path: "components",
      //   loadChildren: "./components/components.module#ComponentsModule"
      // },
      // { path: "charts", loadChildren: "./charts/charts.module#ChartsModule" },
      { path: "ui", loadChildren: "./ui/ui.module#UiModule" },
      { path: "forms", loadChildren: "./forms/forms.module#FormsModule" },
      { path: "tables", loadChildren: "./tables/tables.module#TablesModule" },

      {
        path: "recrutamento/cidades",
        loadChildren: "./cidades/cidades.module#CidadesModule"
      },
      {
        path: "recrutamento/vagas",
        loadChildren: "./vagas/vagas.module#VagasModule"
      },
      {
        path: "cargos/setores",
        loadChildren: "./setores/setores.module#SetoresModule"
      },
      {
        path: "cargos/funcionarios",
        loadChildren: "./funcionarios/funcionarios.module#FuncionariosModule"
      },
      {
        path: "cadastros/atestados",
        loadChildren: "./atestados/atestados.module#AtestadosModule"
      },
      {
        path: "cargos/cargos",
        loadChildren: "./cargos/cargos.module#CargosModule"
      },
      {
        path: "cadastros/dependentes",
        loadChildren: "./dependentes/dependentes.module#DependentesModule"
      },
      {
        path: "cadastros/salarios",
        loadChildren: "./salarios/salarios.module#SalariosModule"
      },
      {
        path: "cadastros/tab-inss",
        loadChildren:
          "./tab-inss/tab-inss.module#TabInssModule"
      },
      {
        path: "cadastros/atestados",
        loadChildren: "./atestados/atestados.module#AtestadosModule"
      },
      {
        path: "cadastros/tab-irrf",
        loadChildren: "./tab-irrf/tab-irrf.module#TabIrrfModule"
      },
      {
        path: "cadastros/tab-sal-familia",
        loadChildren:
          "./tab-sal-familia/tab-sal-familia.module#TabSalFamiliaModule"
      },
      {
        path: "cadastros/eventos",
        loadChildren: "./eventos/eventos.module#EventosModule"
      },
      {
        path: "cadastros/grupo-eventos",
        loadChildren: "./grupo-eventos/grupo-eventos.module#GrupoEventosModule"
      },
      {
        path: "cadastros/eventosFixos",
        loadChildren: "./eventosFixos/eventosFixos.module#EventosFixosModule"
      },
      {
        path: "cadastros/folha",
        loadChildren: "./folha/folha.module#FolhaModule"
      },
      {
        path: "recrutamento/pessoas",
        loadChildren: "./pessoas/pessoas.module#PessoasModule"
      }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
