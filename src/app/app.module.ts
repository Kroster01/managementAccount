import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginYRegistroModule } from './principal/login-y-registro/login-y-registro.module';
import { LoginComponent } from './principal/login-y-registro/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    LoginYRegistroModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
