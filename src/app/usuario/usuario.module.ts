import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioComponent } from './usuario.component';
import { UsuarioCadastroComponent } from './cadastro/usuario-cadastro.component';
import { UsuarioService } from './usuario.service';

@NgModule({
    declarations: [
        UsuarioComponent,
        UsuarioCadastroComponent
    ],
    imports: [ CommonModule ],
    exports: [],
    providers: [
        UsuarioService
    ],
})
export class UsuarioModule {}