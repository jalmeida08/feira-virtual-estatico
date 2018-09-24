import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { Categoria } from '../../_model/categoria';
import { uriBase } from '../../data/uriBase';

@Injectable()
export class CategoriaService {

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

    public salvar(categoria: Categoria): Observable<Response> {
        this.construirHeader();
        return this._http
            .post(
                uriBase.uri + 'categoria/',
                categoria,
                this._options
            );
    }

    public listarCategoria(): Observable<Categoria[]> {
        this.construirHeader();
        return this._http
            .get(uriBase.uri + 'categoria/',
                this._options)
            .pipe(
                map(res => res.json())
            );
    }
}
