import { Injectable } from '@angular/core';
import { Usuario } from '../_model/usuario';
import { BehaviorSubject } from 'rxjs';
import { Observable, pipe } from 'rxjs';
import { Router } from '@angular/router';
import { UsuarioLogado } from '../_model/usuario-logado';
import { CookieService } from 'ngx-cookie-service';
import { Permissao } from '../_model/permissao';
import { Acessos } from '../_model/acessos';

@Injectable()
export class DataService {

    constructor(
        private _router: Router,
        private _cookieService: CookieService,
    ) {  }

    public checarUsuarioAutorizado() {
        if (!this._cookieService.get('utk')) {
            this._router.navigate(['']);
            return;
        }
    }

    public checarAcessoAutorizado(acesso: string) {
        var acessos = this._cookieService.get('uta');
        if (acessos.indexOf(acesso) < 0) {
            this._router.navigate(['/']);
        }
        console.error(acessos);
    }
}