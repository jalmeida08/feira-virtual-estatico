import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { CategoriaService } from '../../_administracao/categoria/categoria.service';
import { Categoria } from '../../_model/categoria';
import { Subcategoria } from '../../_model/subcategoria';

@Component({
    selector: 'app-categoria-list',
    templateUrl: './categoria-list.component.html',
    styleUrls: ['../../_administracao/categoria/categoria.component.css']
})
export class CategoriaListeComponent implements OnInit {

    public categorias: Array<Categoria> = new Array<Categoria>();
    public categoria: Categoria = new Categoria();
    public categoriaGenero: Categoria[] = new Array<Categoria>();
    
    public categoriaIsSelected: boolean = false;
    public categoriaIsGenero: boolean = false;
    
    @Input()  public categoriaSelecionada: Categoria[] = new Array<Categoria>();
    @Input()  public subcategoriaSelecionada: Subcategoria = undefined;
    // public categoriaGenSelecionada: Categoria = undefined;
    @Output() public emitterAlertaDisabledBtn = new EventEmitter();
    @Output() public emitterCategoria = new EventEmitter();

    constructor(
        private _categoriaService: CategoriaService,
    ) {
        this._categoriaService = _categoriaService;
    }

    public listarCategorias() {
        this._categoriaService
            .listarCategoria()
            .subscribe(res => {
                res.forEach((ocorrencia: Categoria, key: number) => {
                    var genero = ocorrencia.categoria.toLowerCase();
                    if (genero == 'masculino' || genero == 'feminino' || genero == 'unissex') {
                        this.categoriaGenero.push(ocorrencia);
                    } else {
                        this.categorias.push(ocorrencia);
                    }
                });
            }, error => {
                // this.alerta('Erro ao buscar as categorias','danger','Erro');
            });
    }

    public buscarPorId(categoria: Categoria) {
        this.categoriaSelecionada = []
        this.categoriaSelecionada.push(categoria);

        this.emitterAlertaDisabledBtn.emit(true);
        this.categoriaIsSelected = true;
        this.categoriaIsGenero = false;
        
        this._categoriaService
        .categoria(categoria)
        .subscribe(res => {
            this.categoria = res
        }, error => {
            window.alert('erro ao buscar categoria ' + error)
        });
    }
    
    public indicadorDeGenero(categoria: Categoria) {
        if (categoria.indicadorGenero){
            this.categoriaIsGenero = true;
            this.emitterAlertaDisabledBtn.emit(true);
        }else{
            this.categoriaIsGenero = false;
            this.emitterAlertaDisabledBtn.emit(false);
        }
    }

    public setarSubcategoria(subcategoria: Subcategoria) {
        this.subcategoriaSelecionada = subcategoria;

        var subcategriaList: Subcategoria[] = new Array<Subcategoria>();
        subcategriaList.push(subcategoria);
        this.indicadorDeGenero(this.categoriaSelecionada[0]);
        
        this.categoriaSelecionada[0].subcategoria = subcategriaList;
        if(!this.categoriaIsGenero){
            this.emitterCategoria.emit(this.categoriaSelecionada);
        }
    }

    public setarCategoriaGenero(generoCategoria: Categoria){
        if(this.categoriaSelecionada.length > 1){
            this.categoriaGenero.forEach(ocorrencia => {
                if(this.categoriaSelecionada.indexOf(ocorrencia) > 0){
                    this.categoriaSelecionada.splice(this.categoriaSelecionada.indexOf(ocorrencia), 1);
                }
            });
        }
        this.emitterAlertaDisabledBtn.emit(false);
        this.categoriaSelecionada.push(generoCategoria);
        this.emitterCategoria.emit(this.categoriaSelecionada);
    }
    
    ngOnInit(): void { this.listarCategorias(); }
}
