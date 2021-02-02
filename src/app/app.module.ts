import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginModule } from './principal/login-y-registro/login/login.module';
import { LoginComponent } from './principal/login-y-registro/login/loginComponent/login.component';
import { AppRoutingModule } from './routing/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RegisterModule } from './principal/login-y-registro/register/register.module';
import { RegisterComponent } from './principal/login-y-registro/register/registerComponent/register.component';
import { MenuHeaderComponent } from './principal/home/menu-header/menu-header.component';
import { SectionamdComponent } from './sections/sectionamd/sectionamd.component';
import { SectionamdModule } from './sections/sectionamd/sectionamd.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MenuHeaderComponent,
    SectionamdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    RegisterModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    SectionamdModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
