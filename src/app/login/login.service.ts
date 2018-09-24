import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Usuario } from '../_model/usuario';
import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { uriBase } from '../data/uriBase';

@Injectable()
export class LoginService {

    private _headers: Headers;

    constructor(
        private _http: Http
    ) {
        this._http = _http;
    }

    public login(usuario: Usuario): Observable<any> {
        return this._http
            .post(
                uriBase.uri + "usuario/login",
                usuario,
                { headers: this._headers }
            ).pipe(
                map(res => res.json())
            );

    }
}