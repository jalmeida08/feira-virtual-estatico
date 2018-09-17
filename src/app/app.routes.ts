import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { UsuarioComponent } from './usuario/usuario.component';
import { LoginComponent } from './login/login.component';
import { PessoaComponent } from './pessoa/pessoa.component';
import { UsuarioCadastroComponent } from './usuario/cadastro/usuario-cadastro.component';
import { VendedorCadastroComponent } from './loja/_visao-vendedor/cadastro/vendedor-cadastro.component';
import { ProdutoComponent } from './loja/_visao-vendedor/produto/produto.component';
import { ManterProdutoComponent } from './loja/_visao-vendedor/produto/cadastro/manter-produto.component';

const appRoutes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'cadastrar', component: UsuarioCadastroComponent },
    { path: 'usuario', component: UsuarioComponent },
    { path: 'pessoa', component: PessoaComponent },

    { path: 'vendedor/novo', component: VendedorCadastroComponent },
    { path: 'produto', component: ProdutoComponent },
    { path: 'produto/novo', component: ManterProdutoComponent },
    /*{ path: 'pessoa', component: PessoaComponent },
    { path: 'pessoa/cadastrar', component: PessoaFormComponent },
    { path: 'pessoa/form/:id', component: PessoaFormComponent }, */


    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
