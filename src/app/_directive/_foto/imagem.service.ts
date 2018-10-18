import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Http, RequestOptions, Headers } from '@angular/http';

@Injectable()
export class ImagemService {
    private _headers: Headers;
    private _options: RequestOptions;

    constructor(
        private _http: Http,
        private cookieService: CookieService,
    ) {
        this._http = _http;
    }

    public construirHeader() {
        this._headers = new Headers({ 'Content-Type': 'application/json' });;
        this._options = new RequestOptions({ headers: this._headers });
        this._headers.append('Authentication', this.cookieService.get('utk'));
    }
}