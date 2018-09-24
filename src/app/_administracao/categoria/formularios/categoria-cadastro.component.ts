import { Component, OnInit } from '@angular/core';
import { Categoria } from '../../../_model/categoria';
import { CategoriaService } from '../categoria.service';
import { Mensagem } from '../../../_directive/_alert/mensagem';
import { AlertaComponent } from '../../../_directive/_alert/alerta.component';

@Component({
    selector: 'app-categoria-cadastro',
    templateUrl: './categoria-cadastro.component.html',
    styleUrls: ['../categoria.component.css']
})
export class CategoriaCadastroComponent implements OnInit {

    public categoria: Categoria = new Categoria();
    public mensagens: Array<Mensagem> = new Array<Mensagem>();
    public categorias: Array<Categoria> = new Array<Categoria>();

    constructor(
        private _categoriaService: CategoriaService
    ) {
        this._categoriaService = _categoriaService;
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
        this._categoriaService
            .salvar(this.categoria)
            .subscribe(res => {
                this.mensagens = [];
                this.alerta(
                    'Categoria salva com sucesso',
                    'success',
                    'Sucesso');
                this.categoria = new Categoria();
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
                this.alerta(
                    'Erro ao buscar as categorias',
                    'error',
                    'Erro');
            })
    }

    ngOnInit(): void {
        this.listarCategorias();
    }
}
