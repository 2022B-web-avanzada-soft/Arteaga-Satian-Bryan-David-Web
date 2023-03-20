// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

export type User = {
    id: number
    name: string
}

export interface IDirector {
    id?: number
    nombre: string;
    genero: string;
    edad: number;
    retirado: boolean;
    nacionalidad: string;
}

export interface IPelicula {
    id?: number
    titulo: string;
    anioLanzamiento: string;
    genero: string;
    rentable: boolean;
    director: number;
}