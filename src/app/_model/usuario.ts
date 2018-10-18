import { Permissao } from "./permissao";

export class Usuario{
    public idUsuario: string;
    public email: string;
    public senha: string;
    public permissao: Array<Permissao> = new Array<Permissao>(); 
}