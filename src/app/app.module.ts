import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { routing } from './app.routes';
import { AppComponent } from './app.component';
import { UsuarioModule } from './usuario/usuario.module';
import { LoginModule } from './login/login.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpModule,
    LoginModule,
    UsuarioModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
