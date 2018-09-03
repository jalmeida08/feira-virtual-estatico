import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Usuario } from '../usuario/usuario';
import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { UsuarioLogado } from './usuarioLogado';

@Injectable()
export class LoginService {

    private _url = "http://localhost:8080/usuario/";
    private _headers: Headers;

    constructor(
        private _http: Http
    ) {
        this._http = _http;
    }

    public login(usuario: Usuario): Observable<UsuarioLogado> {
        return this._http
            .post(
                this._url + "login",
                usuario,
                { headers: this._headers }
            ).pipe(
                map(res => res.json())
            );

    }
}