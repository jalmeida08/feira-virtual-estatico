import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Endereco } from '../../_model/endereco';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class EnderecoService {

    private _url: string = 'http://localhost:8080/endereco/';
    private _headers: Headers;
    private _options: RequestOptions;

    constructor(
        private _http: Http,
        private _cookieService: CookieService
    ) {
        this._http = _http;
    }

    public construirHeader() {
        this._headers = new Headers({ 'Content-Type': 'application/json' });;
        this._options = new RequestOptions({ headers: this._headers });
        this._headers.append('Authentication', this._cookieService.get('utk'));
    }

    public buscarCep(cep: number): Observable<any> {
        return this._http
            .get('https://viacep.com.br/ws/' + cep + '/json/')
            .pipe(
                map(res => res.json())
            );
    }

    public salvar(endereco: Endereco): Observable<any> {
        this.construirHeader();
        return this._http
            .post(
                this._url,
                endereco,
                this._options)
            .pipe(
                map(
                    res => res.json()
                )
            );
    }

}