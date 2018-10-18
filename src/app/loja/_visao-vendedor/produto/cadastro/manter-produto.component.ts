import { Component, OnInit, Output, NgZone } from '@angular/core';
import { Categoria } from '../../../../_model/categoria';
import { Produto } from '../../../../_model/produto';
import { DataService } from '../../../../data/data.service';
import { Acessos } from '../../../../_model/acessos';
import { Subcategoria } from '../../../../_model/subcategoria';

@Component({
    selector: 'app-manter-produto',
    templateUrl: './manter-produto.component.html',
    styleUrls: ['../produto.component.css']
})
export class ManterProdutoComponent implements OnInit {

    public categoria: Categoria[] = new Array<Categoria>();
    public produto: Produto = new Produto();
    public subcategoria: Subcategoria = new Subcategoria();
    public isCategoria: boolean = true;
    public isProduto: boolean = false;
    public isCategoriaSelected = true;

    constructor(
        private _dataService: DataService,
    ) {
        this._dataService = _dataService;
    }

    public salvar() {
    }

    public showProduto() {
        this.isProduto = true;
        this.isCategoria = false;
    }

    public receberCategoria(categoria: Categoria[]) {
        console.log(categoria);
        this.subcategoria = categoria[0].subcategoria[0];
        this.categoria = categoria;
    }

    public receverAlertaContinuidade(io : boolean){
        this.isCategoriaSelected = io;
    }
    
    ngOnInit(): void {
        this._dataService.checarAcessoAutorizado(Acessos.VEN01);
    }
}
