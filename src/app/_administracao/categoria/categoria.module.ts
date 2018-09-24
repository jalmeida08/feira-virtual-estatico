import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriaService } from './categoria.service';
import { FormsModule } from '@angular/forms';
import { CategoriaComponent } from './categoria.component';
import { CategoriaCadastroComponent } from './formularios/categoria-cadastro.component';
import { AlertaModule } from '../../_directive/_alert/alerta.module';

@NgModule({
    declarations: [
        CategoriaComponent,
        CategoriaCadastroComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        AlertaModule,
    ],
    exports: [],
    providers: [
        CategoriaService
    ],
})
export class CategoriaModule {}