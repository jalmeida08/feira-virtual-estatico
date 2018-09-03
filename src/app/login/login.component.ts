import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario/usuario';
import { LoginService } from './login.service';

@Component({
    selector: 'login-name',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    
    public usuario: Usuario = new Usuario();
    
    constructor(
        private _loginService: LoginService
    ) { 
        this._loginService = _loginService;
    }

    public logar(){
        this._loginService
            .login(this.usuario)
            .subscribe(res => {
                console.log(res);
            }, error=>{
                console.warn(error);
            })
    }
    ngOnInit(): void { 
    this.usuario.email = 'jefferson08jsa@hotmail.com';
    this.usuario.senha = '123123';
    }
}
