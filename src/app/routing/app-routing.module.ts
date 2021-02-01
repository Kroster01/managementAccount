import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'login', loadChildren: () => import('../principal/login-y-registro/login/login.module').then(mod => mod.LoginModule) },
  { path: 'register', loadChildren: () => import('../principal/login-y-registro/register/register.module').then(mod => mod.RegisterModule) },
  { path: '**', redirectTo: 'login', pathMatch: 'full' } // cuando la ruta no existe
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
