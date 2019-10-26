import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { WardGuard } from './guards/ward.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './componentes/login/login.module#LoginPageModule', canActivate : [WardGuard]},
  { path: 'login', loadChildren: './componentes/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './componentes/register/register.module#RegisterPageModule' },
  { path: 'user', loadChildren: './componentes/user/user.module#UserPageModule', canActivate : [WardGuard] },
  { path: 'datospaciente', loadChildren: './componentes/datospaciente/datospaciente.module#DatospacientePageModule'},
  { path: 'interconsulta', loadChildren: './componentes/interconsulta/interconsulta.module#InterconsultaPageModule'},
  { path: 'verinterconsulta', loadChildren: './componentes/vistas/verinterconsulta/verinterconsulta.module#VerinterconsultaPageModule'},
  { path: 'verfichamedica', loadChildren: './componentes/vistas/verfichamedica/verfichamedica.module#VerfichamedicaPageModule'},
  { path: 'fichamedica', loadChildren: './componentes/fichamedica/fichamedica.module#FichamedicaPageModule'},
  {path : 'editarficha', loadChildren: './componentes/editar/editarficha/editarficha.module#EditarfichaPageModule'},
  { path: 'psicologia', loadChildren: './componentes/psicologia/psicologia.module#PsicologiaPageModule', canActivate : [WardGuard]},
  { path: 'verpsicologia', loadChildren: './componentes/vistas/verpsicologia/verpsicologia.module#VerpsicologiaPageModule', canActivate : [WardGuard]}
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
