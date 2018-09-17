import { Component, OnInit } from '@angular/core';
import { Usuario } from '../_model/usuario';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { PessoaComponent } from '../pessoa/pessoa.component';
import { Pessoa } from '../_model/pessoa';
import { UsuarioService } from '../usuario/usuario.service';
import { PessoaService } from '../pessoa/pessoa.service';
import { Mensagem } from '../_directive/_alert/mensagem';

@Component({
    selector: 'login-name',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    public usuario: Usuario = new Usuario();
    public pessoa: Pessoa = new Pessoa();
    public mensagens: Mensagem[] = new Array<Mensagem>();
    public email: string;
    public senha: string;

    constructor(
        private _loginService: LoginService,
        private _usuarioService: UsuarioService,
        private _pessoaService: PessoaService,
        private cookieService: CookieService,
        private _router: Router
    ) {
        this._loginService = _loginService;
        this._usuarioService = _usuarioService;
        this._pessoaService = _pessoaService;
    }

    // RESPONSAVEL POR DISPARAR AS MENSAGENS NA TELA
    public alerta(
        mensagem: string,
        tipoMensagem: string,
        mensagemDesaque: string) {
        this.mensagens.push(
            {
                mensagem: mensagem,
                tipoMensagem: tipoMensagem,
                mensagemDesaque: mensagemDesaque
            }
        );
    }

    public logar() {
        this.usuario.email = this.email;
        this.usuario.senha = this.senha;
        this.senha = '';
        this._loginService
            .login(this.usuario)
            .subscribe(res => {
                this.cookieService.deleteAll();
                this.redirecionamento(res);
                this.usuario = new Usuario();
            }, error => {
                this.alerta("E-mail ou senha estão incorretos", "danger", "Erro! ");
            });
    }

    public salvarUsuarioPessoa() {
        this.cookieService.deleteAll();

        this._usuarioService
            .salvar(this.usuario)
            .subscribe(res => {

                this.usuario.idUsuario = res.entity.idUsuario;
                this._loginService
                    .login(this.usuario)
                    .subscribe(res => {

                        this.registrarSessao(res.entity);
                        this.pessoa.usuario = this.usuario;
                        this._pessoaService
                            .salvar(this.pessoa)
                            .subscribe(res => {
                                this._router.navigate(['pessoa']);

                            }, error => { console.log('erro ao salvar pessoa ', error) });
                    }, error => { console.log('erro ao logar ', error) });

            }, error => { console.log('erro ao salvar usuario ', error) });

        /* this._pessoaService
            .salvar(this.pessoa)
            .subscribe(res => {
                this.usuario.pessoa = res.entity;
                this._usuarioService
                    .salvar(this.usuario)
                    .subscribe(res => {
                        this._loginService
                            .login(this.usuario)
                            .subscribe(res => {
                                this.cookieService.deleteAll();
                                this.redirecionamento(res);
                                this.usuario = new Usuario();
                            });
                    });
            }, error => {
                console.log("pessoa erro--> ", error)
            }); */

    }

    public redirecionamento(response) {
        if (response.statusInfo != 'OK') {
            console.error(response.statusInfo);
            this.alerta("E-mail ou senha estão incorretos", "danger", "Erro! ");
            return;
        }
        this.registrarSessao(response.entity);
        this._router.navigate(['pessoa']);
    }

    public registrarSessao(response) {
        this.cookieService.set('uti', response.idUsuario)
        this.cookieService.set('utk', response.token);
    }

    ngOnInit(): void {
        this.email = 'jefferson08jsa@hotmail.com';
        this.senha = '123123';
    }
}
