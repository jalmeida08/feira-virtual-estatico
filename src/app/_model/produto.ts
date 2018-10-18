import { Imagem } from "./imagem";
import { Categoria } from "./categoria";

export class Produto {

    public idPoduto: string;
	public titulo: string;
	public marca: string;
	public modelo: string;
	public descricao: string;

	public fotos: Array<Imagem> = new Array<Imagem>();

	public categoria: Categoria = new Categoria();

    public cor: string;

    public tipoCorrente: string;
    public capacidadeBateria: string;

    public familia: string;
    public linhaSerie: string;
    public tipoTela: string;
    public tamanhoTela: string;
    public tipoResolucao: string;
    public resolucaoMaxima: string;
    public quantidadePortosHdmi: string;
    public quantidadePortasUsb: string;

    public altura: string;
    public largura: string;
    public profundidade: string;
    public dimensoes: string;
    public peso: string;

    public quantidadeAltoFalante: string;
    public potênciaMaximaAltoFalantes: string;
    public modoSom: string;

    public memoriaInterna: string;
    public memoriaRam: string;
    public sistemaOperacional: string;
    public versaoSistemaOperacional: string;
    public velocidadeProcessador: string;
    public resolucaoCameraTraseira: string;
    public resolucaoCameraFrontalGenero: string;

    public operadora: string;

    public tipoRoupa: string;
    public materialRoupa: string;
    public temporada: string;
    public tamanho: string;
}