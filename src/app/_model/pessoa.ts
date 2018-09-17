import { Usuario } from "./usuario";
import { Endereco } from "./endereco";

export class Pessoa {
    public idPessoa: string;
    public nome: string;
    public sobrenome: string;
    public numeroCpf: number;
    public numeroCnpj: number;
    public nomeFantasia: string;
    public usuario: Usuario = new Usuario();
    public endereco: Array<Endereco> = new Array<Endereco>();
}