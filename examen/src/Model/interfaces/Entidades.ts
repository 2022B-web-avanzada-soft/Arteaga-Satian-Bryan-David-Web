// Defino las interfaces para las 2 entidades

export interface IEntidad{
    id?: number;
}
export interface IDirector extends IEntidad{
    nombres: string;
    genero: string;
    edad: number;
    retirado: boolean;
    nacionalidad: string;
}

export interface IPelicula extends IEntidad{
    titulo: string;
    anioLanzamiento: number;
    genero: string;
    rentable: boolean;
    director: IDirector;
}

