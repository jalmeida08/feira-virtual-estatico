import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Usuario } from '../_model/usuario';
import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { uriBase } from '../data/uriBase';

@Injectable()
export class UsuarioService {

    // private _url: string = 'http://localhost:8080/usuario/'
    private _headers: Headers;

    constructor(
        private _http: Http
    ) {
        this._http = _http;
    }

    public salvar(usuario: Usuario): Observable<any> {
        return this._http
            .post(
                uriBase.uri + "usuario/salvar",
                usuario,
                { headers: this._headers }
            ).pipe(
                map(res => res.json())
            );
    }
}