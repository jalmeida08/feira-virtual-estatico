import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { UsuarioComponent } from './usuario/usuario.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'usuario', component: UsuarioComponent },
    /*{ path: 'pessoa', component: PessoaComponent },
    { path: 'pessoa/cadastrar', component: PessoaFormComponent },
    { path: 'pessoa/form/:id', component: PessoaFormComponent }, */


    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
