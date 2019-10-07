import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './componentes/login/login.module#LoginPageModule'},
  { path: 'login', loadChildren: './componentes/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './componentes/register/register.module#RegisterPageModule' },
  { path: 'user', loadChildren: './componentes/user/user.module#UserPageModule' },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
