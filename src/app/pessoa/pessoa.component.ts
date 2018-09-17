import { Component, OnInit } from '@angular/core';
import { PessoaService } from './pessoa.service';
import { DataService } from '../data/data.service';

@Component({
    selector: 'pessoa-name',
    templateUrl: './pessoa.component.html',
    styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent implements OnInit {

    constructor(
        private _pessoaService: PessoaService,
    ){
        this._pessoaService = _pessoaService;
    }

    public listarPessoa() {
        this._pessoaService
            .listarPessoa()
            .subscribe(res => {
                console.warn("ESTA É A RESPOSTA ", res);
            }, error => {
                console.warn("ESTE È O ERRO ", error);
            })
    }
    
    ngOnInit(): void {
        this.listarPessoa();
    }
}
