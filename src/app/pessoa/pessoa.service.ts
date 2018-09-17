import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { UsuarioLogado } from '../_model/usuario-logado';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { Pessoa } from '../_model/pessoa';

@Injectable()
export class PessoaService {

    private _headers: Headers;
    private _options: RequestOptions;
    private _url: string = "http://localhost:8080/pessoa/";
    private usuarioLogado: UsuarioLogado = new UsuarioLogado();

    constructor(
        private _http: Http,
        private cookieService: CookieService,
        private _router: Router,
    ) {
        this._http = _http;
    }

    public construirHeader() {
        this._headers = new Headers({ 'Content-Type': 'application/json' });;
        this._options = new RequestOptions({ headers: this._headers });
        this._headers.append('Authentication', this.cookieService.get('utk'));
    }

    public salvar(pessoa: Pessoa): Observable<any> {
        this.construirHeader();
        return this._http
            .post(
                this._url + "salvar",
                pessoa,
                this._options)
            .pipe(
                map(res => res.json())
            );
    }

    public atualizarPessoaVendedor(pessoa: Pessoa){
        this.construirHeader();
        return this._http
            .post(
                this._url + "atualizarPessoaVendedor",
                pessoa,
                this._options)
            .pipe(
                map(res => res.json())
            );
    }
    
    public getPessoaPorIdUsuario(idUsuario: string): Observable<Pessoa> {
        this.construirHeader();
        return this._http
            .get(this._url + 'usuario/'+ idUsuario,
                this._options)
            .pipe(
                map(res => res.json())
            );
    }

    public getPessoa(idPessoa: string): Observable<Pessoa> {
        this.construirHeader();
        return this._http
            .get(this._url + idPessoa,
                this._options)
            .pipe(
                map(res => res.json())
            );
    }
    
    public listarPessoa() {
        this.construirHeader();
        return this._http
            .get(this._url,
                this._options)
            .pipe(
                map(res => res.json())
            );
    }


}