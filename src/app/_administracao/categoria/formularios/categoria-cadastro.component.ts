import { Component, OnInit } from '@angular/core';
import { Categoria } from '../../../_model/categoria';
import { CategoriaService } from '../categoria.service';
import { Mensagem } from '../../../_directive/_alert/mensagem';
import { Subcategoria } from '../../../_model/subcategoria';
import { SubcategoriaService } from '../../subcategoria/subcategoria.service';

@Component({
    selector: 'app-categoria-cadastro',
    templateUrl: './categoria-cadastro.component.html',
    styleUrls: ['../categoria.component.css']
})
export class CategoriaCadastroComponent implements OnInit {

    public nomeCategoria: string = '';
    public categoria: Categoria = new Categoria();
    public mensagens: Array<Mensagem> = new Array<Mensagem>();
    public categorias: Array<Categoria> = new Array<Categoria>();
    public categoriaSelecionada: Categoria = undefined;
    public subcategoria: Subcategoria = new Subcategoria();

    constructor(
        private _categoriaService: CategoriaService,
        private _subcategoriaService: SubcategoriaService
    ) {
        this._categoriaService = _categoriaService;
        this._subcategoriaService = _subcategoriaService;
    }

    // RESPONSAVEL POR DISPARAR AS MENSAGENS NA TELA
    private alerta(
        mensagem: string,
        tipoMensagem: string,
        mensagemDesaque: string) {
        this.mensagens.push(
            {
                mensagem: mensagem,
                tipoMensagem: tipoMensagem,
                mensagemDesaque: mensagemDesaque
            }
        );
    }

    public salvar(): void {
        this.categoria.categoria = this.nomeCategoria;
        this._categoriaService
            .salvar(this.categoria)
            .subscribe(res => {
                this.mensagens = [];
                this.alerta(
                    'Categoria salva com sucesso',
                    'success',
                    'Sucesso');
                this.categoria = new Categoria();
                this.nomeCategoria = '';
                this.listarCategorias();
            }, error => {
                console.log('error' + error)
            });
    }

    public listarCategorias() {
        this._categoriaService
            .listarCategoria()
            .subscribe(res => {
                this.categorias = res;
            }, error => {
                this.alerta('Erro ao buscar as categorias', 'danger', 'Erro');
            })
    }

    public buscarPorId(categoria: Categoria) {
        this.categoriaSelecionada = categoria;
        this._categoriaService
            .categoria(categoria)
            .subscribe(res => {
                this.categoria = res
            }, error => {
                window.alert('erro ao buscar categoria ' + error)
            });
    }

    public salvarSubCategoria() {
        this.mensagens = [];
        this._subcategoriaService
            .salvar(this.subcategoria)
            .subscribe(res => {
                this.subcategoria.idSubcategoria = res.entity.idSubcategoria;
                this.salvarSubcategoriaInCategoria(this.subcategoria);
                this.subcategoria = new Subcategoria();
            }, error => {
                this.alerta('Erro ao buscar as subcategorias ' + error, 'danger', 'Erro');
            });
    }

    private salvarSubcategoriaInCategoria(subcategoria: Subcategoria) {
        this.categoria.subcategoria = new Array<Subcategoria>();
        this.categoria.subcategoria.push(subcategoria);
        this._categoriaService
            .salvarSubcategoriaInCategoria(this.categoria)
            .subscribe(res => {
                this.alerta('Subategoria salva com sucesso', 'success', 'Sucesso');
                this.buscarPorId(this.categoria);
                this.categoria = new Categoria();
                this.subcategoria = new Subcategoria();
            }, error => {
                this.alerta('Erro ao salvar Ccategoria ' + error, 'danger', 'Erro');
            })
    }

    ngOnInit(): void {
        this.listarCategorias();
    }
}
