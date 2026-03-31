export interface Filme {
    id: number;
    nome: string;
    duracao?: number;
    genero?: string;
    preco?: number;
    classificacao?:string;
    ano?: number;
    capa?: string;
    imagem?: string;
    diretor?: string;
    elenco?: string;
    descricao?: string;
    avaliacao?: number;
}
