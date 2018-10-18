import { Subcategoria } from "./subcategoria";

export class Categoria{
    public idCategoria: string;
    public categoria: String;
    public indicadorGenero: boolean;
    public subcategoria: Array<Subcategoria> = new Array<Subcategoria>();
}