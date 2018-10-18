import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PermissaoService } from './permissao.service';
import { PermissaoComponent } from './permissao.component';
import { FormsModule } from '@angular/forms';
import { AlertaModule } from '../../_directive/_alert/alerta.module';

@NgModule({
    declarations: [PermissaoComponent],
    imports: [ 
        CommonModule,
        FormsModule,
        AlertaModule
    ],
    exports: [],
    providers: [PermissaoService],
})
export class PermissaoModule {}