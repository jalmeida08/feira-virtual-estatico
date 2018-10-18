import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { routing } from './app.routes';
import { AppComponent } from './app.component';
import { UsuarioModule } from './usuario/usuario.module';
import { LoginModule } from './login/login.module';
import { PessoaModule } from './pessoa/pessoa.module';
import { CookieService } from 'ngx-cookie-service';
import { DataService } from './data/data.service';
import { AlertaModule } from './_directive/_alert/alerta.module';
import { LojaModule } from './loja/loja.module';
import { EnderecoModule } from './_directive/_endereco/endereco.module';
import { CategoriaModule } from './_administracao/categoria/categoria.module';
import { SubcategoriaModule } from './_administracao/subcategoria/subcategoria.module';
import { ImagemModule } from './_directive/_foto/imagem.module';
import { PermissaoModule } from './_administracao/acesso/permissao.module';

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
    PessoaModule,
    AlertaModule,
    LojaModule,
    EnderecoModule,
    CategoriaModule,
    SubcategoriaModule,
    ImagemModule,
    PermissaoModule
  ],
  providers: [
    CookieService,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
