// Defino las interfaces para las 2 entidades

export interface Director {
    nombres: string;
    apellidos: string;
    edad: number;
    numPeliculasDirigidas: number;
    retirado: boolean;
}

export interface Pelicula {
    titulo: string;
    director: Director;
    estreno: Date;
    descripcion: string;
    costo: number;
}