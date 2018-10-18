import { Component, OnInit } from '@angular/core';
import { Permissao } from '../../_model/permissao';
import { PermissaoService } from './permissao.service';
import { Mensagem } from '../../_directive/_alert/mensagem';
import { DataService } from '../../data/data.service';
import { Acessos } from '../../_model/acessos';

@Component({
    selector: 'app-permissao',
    templateUrl: './permissao.component.html',
})
export class PermissaoComponent implements OnInit {
    
    public permissao: Permissao = new Permissao();
    public mensagens: Mensagem[] = new Array<Mensagem>();
    
    constructor(
        private _permissaoService: PermissaoService,
        private _dataService: DataService
    ) {
        this._permissaoService = _permissaoService;
    }

    // RESPONSAVEL POR DISPARAR AS MENSAGENS NA TELA
    public alerta(
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
    
    public salvar(){
        this.mensagens = [];
        this._permissaoService
            .salvarAcesso(this.permissao)
            .subscribe(res => {
                this.alerta(
                    'Salvo com sucesso',
                    'success',
                    'Sucesso'
                );
                this.permissao = new Permissao();
            }, error => {
                this.alerta(
                    'Erro ao salvar',
                    'danger',
                    'Erro'
                );
            })
    }
    
    ngOnInit(): void {
        this._dataService.checarAcessoAutorizado(Acessos.ADM01);
    }
}
