import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuHeaderComponent } from '../principal/home/menu-header/menu-header.component';

const routes: Routes = [
  { path: 'login', loadChildren: () => import('../principal/login-y-registro/login/login.module').then(mod => mod.LoginModule) },
  { path: 'register', loadChildren: () => import('../principal/login-y-registro/register/register.module').then(mod => mod.RegisterModule) },
  {
    path: 'main',
    component: MenuHeaderComponent,
    // canActivate: [SessionGuard],
    children: [
      {
        path: 'sectionamd',
        loadChildren: () => import('../sections/sectionamd/sectionamd.module').then(mod => mod.SectionamdModule)
        , runGuardsAndResolvers: 'always'
      }
    ]
  },
  { path: '**', redirectTo: 'login', pathMatch: 'full' } // cuando la ruta no existe
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
