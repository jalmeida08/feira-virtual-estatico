import { Component, OnInit, Input, Output } from '@angular/core';
import { Endereco } from '../../_model/endereco';
import { EnderecoService } from './endereco.service';

@Component({
    selector: 'app-endereco',
    templateUrl: './endereco.component.html',
    styleUrls: ['./endereco.component.css']
})
export class EnderecoComponent implements OnInit {

    @Input() public endereco: Endereco;
    @Input() public vendedor: boolean;

    constructor(
        private _enderecoService: EnderecoService,
    ) {
        this._enderecoService = _enderecoService;
    }

    public buscarPorCep() {
        this._enderecoService
            .buscarCep(this.endereco.cep)
            .subscribe(res => {
                console.log(res);
                // this.endereco = res;
                if (res.erro == undefined) {
                    this.endereco.logradouro = res.logradouro;
                    this.endereco.bairro = res.bairro;
                    this.endereco.localidade = res.localidade;
                    this.endereco.uf = res.uf;
                    this.endereco.cep = res.cep.replace(/\D/g, '');
                }
            }, error => {
                console.error("erro", error);
            })

    }

    ngOnInit(): void { }
}
