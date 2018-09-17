import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../../../_model/pessoa';
import { Endereco } from '../../../_model/endereco';
import { PessoaService } from '../../../pessoa/pessoa.service';
import { CookieService } from 'ngx-cookie-service';
import { EnderecoService } from '../../../_directive/_endereco/endereco.service';

@Component({
    selector: 'app-vendedor-cadastro',
    templateUrl: './vendedor-cadastro.component.html',
    styleUrls: ['../../loja.component.css']
})
export class VendedorCadastroComponent implements OnInit {

    public pessoa: Pessoa = new Pessoa();
    public pessoaJuridicaFisica = 'juridica';
    public endereco: Endereco = new Endereco();
    public cpfCnpj: string;
    public vendedor: boolean = true;


    constructor(
        private _pessoaService: PessoaService,
        private _enderecoService: EnderecoService,
        private _cookieService: CookieService
    ) {
        this._cookieService = _cookieService;
        this._pessoaService = _pessoaService;
        this._enderecoService = _enderecoService;
    }

    public salvar() {
        this.pessoa.usuario.idUsuario   = this._cookieService.get('uti');
        this.endereco.usuario.idUsuario = this._cookieService.get('uti');
        
        this._enderecoService
            .salvar(this.endereco)
            .subscribe(res => {
                console.log("salvo com sucesso", res);
                this.endereco.idEndereco = res.entity.idEndereco;
                this.pessoa.endereco.push(this.endereco);
                this._pessoaService
                    .atualizarPessoaVendedor(this.pessoa)
                    .subscribe(res => {
                        console.log("pessoa atualizada com sucesso", res);        
                    }, error => {
                        console.error('erro atualizar pessoa ', error);
                    });
            }, error => {
                console.error('erro salvar endereco ', error);
            });


        // console.log("pessoa ", this.pessoa);
        // console.log("endereco ", this.endereco);
    }

    public pJF(tipoPessoa) {
        if (tipoPessoa == 'fisica') {
            this.pessoa.numeroCnpj = undefined;
        } else {
            this.pessoa.numeroCpf = undefined;
        }
        this.pessoaJuridicaFisica = tipoPessoa;
    }

    ngOnInit(): void {

    }
}
