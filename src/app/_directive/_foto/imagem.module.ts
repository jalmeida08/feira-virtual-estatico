import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagemService } from './imagem.service';
import { ImagemComponent } from './imagem.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [ImagemComponent],
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [ImagemComponent],
    providers: [ImagemService],
})
export class ImagemModule { }