import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './registerComponent/register.component';

const routes: Routes = [
    { path: '', component: RegisterComponent },
    { path: '**', redirectTo: 'register', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RegisterRoutingModule { }
