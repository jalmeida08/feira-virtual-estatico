import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriaService } from './categoria.service';
import { FormsModule } from '@angular/forms';
import { CategoriaComponent } from './categoria.component';
import { CategoriaCadastroComponent } from './formularios/categoria-cadastro.component';
import { AlertaModule } from '../../_directive/_alert/alerta.module';
import { SubcategoriaService } from '../subcategoria/subcategoria.service';
import { CategoriaListeComponent } from '../../_directive/_categoria/categoria-list.component';
import { SubcategoriaModule } from '../subcategoria/subcategoria.module';

@NgModule({
    declarations: [
        CategoriaComponent,
        CategoriaCadastroComponent,
        CategoriaListeComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        AlertaModule,
        SubcategoriaModule
    ],
    exports: [CategoriaListeComponent],
    providers: [
        CategoriaService,
        SubcategoriaService
    ],
})
export class CategoriaModule {}