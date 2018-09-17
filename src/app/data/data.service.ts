import { Injectable } from '@angular/core';
import { Usuario } from '../_model/usuario';
import { BehaviorSubject } from 'rxjs';
import { Observable, pipe } from 'rxjs';
import { Router } from '@angular/router';
import { UsuarioLogado } from '../_model/usuario-logado';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class DataService {

    constructor(
        private _router: Router,
        private _cookieService: CookieService,
    ){}

    public checarUsuarioAutorizado(){
        if(!this._cookieService.get('utk')){
            this._router.navigate(['']);
            return;
        }
    }
}