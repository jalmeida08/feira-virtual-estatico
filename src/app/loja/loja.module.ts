import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LojaComponent } from './loja.component';
import { LojaService } from './loja.service';
import { VendedorCadastroComponent } from './_visao-vendedor/cadastro/vendedor-cadastro.component';
import { FormsModule } from '@angular/forms';
import { EnderecoModule } from '../_directive/_endereco/endereco.module';
import {NgxMaskModule} from 'ngx-mask';
import { ProdutoComponent } from './_visao-vendedor/produto/produto.component';
import { ProdutoService } from './_visao-vendedor/produto/produto.service';
import { ManterProdutoComponent } from './_visao-vendedor/produto/cadastro/manter-produto.component';
import { CategoriaModule } from '../_administracao/categoria/categoria.module';
import { ImagemModule } from '../_directive/_foto/imagem.module';


@NgModule({
    declarations: [
        LojaComponent,
        VendedorCadastroComponent,
        ProdutoComponent,
        ManterProdutoComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        EnderecoModule,
        NgxMaskModule.forRoot(),
        CategoriaModule,
        ImagemModule
    ],
    exports: [],
    providers: [
        LojaService,
        ProdutoService,
    ],
})
export class LojaModule {}