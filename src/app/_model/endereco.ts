import { Usuario } from "./usuario";

export class Endereco{
    public idEndereco: string;
	public cep: number;
	public logradouro: string;
	public cidade: string;
	public bairro: string;
	public complemento: string;
	public localidade: string;
	public uf: string;
	public numero: string;
	public andar: string;
	public box: string;
	public sala: string;
	public referencia: string;
	public usuario: Usuario = new Usuario();
}