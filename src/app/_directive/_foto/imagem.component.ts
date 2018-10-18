import { Component, OnInit } from '@angular/core';
import { Imagem } from '../../_model/imagem';

@Component({
    selector: 'app-imagem',
    templateUrl: './imagem.component.html',
    styleUrls: ['./imagem.component.css']
})
export class ImagemComponent implements OnInit {

    public imagens: Array<Imagem> = new Array<Imagem>();
    public imagem: Imagem = new Imagem();
    public imagemUpload: any;
    public filesBase64: any[] = new Array<any>();

    constructor() { }

    public imagemFile(event) {

        var files = event.target.files;
        var file = files[0];

        if (file && files) {

            var typeFile = file.type;

            if (this.checarExtensao(typeFile)) {
                var reader = new FileReader();

                reader.onloadend = (e) => {
                    this.filesBase64.push(reader.result);
                }
            }
            reader.readAsDataURL(file);
        }

    }

    private checarExtensao(typeFile): boolean {
        var retorno = false;
        switch (typeFile) {
            case 'image/png':
                retorno = true;
                break;
            case 'image/jpeg':
                retorno = true;
                break;
            case 'image/jpg':
                retorno = true;
                break;
        }
        return retorno;
    }
    ngOnInit(): void { }
}
