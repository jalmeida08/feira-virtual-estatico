import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { uriBase } from '../../data/uriBase';
import { Permissao } from '../../_model/permissao';

@Injectable()
export class PermissaoService {

    private _headers: Headers;
    private _options: RequestOptions;

    constructor(
        private _http: Http,
        private cookieService: CookieService,
        private _router: Router,
    ) {
        this._http = _http;
    }

    private construirHeader() {
        this._headers = new Headers({ 'Content-Type': 'application/json' });;
        this._options = new RequestOptions({ headers: this._headers });
        this._headers.append('Authentication', this.cookieService.get('utk'));
    }


    public salvarAcesso(permissao: Permissao): Observable<Response> {
        this.construirHeader();
        return this._http
            .post(
                uriBase.uri + 'permissao/',
                permissao,
                this._options
            )
    }

    public adicionarAcesso(idUsuario: string, idPermissao: string): Observable<Response> {
        this.construirHeader();
        return this._http
            .get(
                uriBase.uri + idUsuario + idPermissao,
                this._options
            )

    }

    public recuperarListaAcesso(): Observable<Permissao> {
        this.construirHeader();
        return this._http
            .get(uriBase.uri)
            .pipe(
                map(res => res.json())
            );
    }


}