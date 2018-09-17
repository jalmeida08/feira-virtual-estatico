import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PessoaService } from './pessoa.service';
import { PessoaComponent } from './pessoa.component';

@NgModule({
    declarations: [
        PessoaComponent
    ],
    imports: [ CommonModule ],
    exports: [],
    providers: [PessoaService],
})
export class PessoaModule {}