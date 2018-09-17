import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnderecoComponent } from './endereco.component';
import { EnderecoService } from './endereco.service';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        EnderecoComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [
        EnderecoComponent
    ],
    providers: [
        EnderecoService
    ],
})
export class EnderecoModule {}