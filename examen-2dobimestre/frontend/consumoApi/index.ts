import {IDirector, IPelicula} from "../interfaces";

const URL_API_DIRECTOR = "http://localhost:8000/api/directores/";
const URL_API_PELICULA = "http://localhost:8000/api/peliculas/";

export async function apiObtenerTodosDirectores() {
    const response = await fetch(URL_API_DIRECTOR, {
        method: 'GET'
    });
    if (!response.ok) {
        console.error(response.statusText)
        return [] as IDirector[];
    }
    const data = await response.json() as IDirector[];
    return data;
}

export function apiCrearDirector(director: IDirector) {
    const data = fetch(URL_API_DIRECTOR, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(director)
    })
    return data;
}

export async function apiActualizarDirector(director: IDirector) {
    const response = await fetch(URL_API_DIRECTOR + director.id + "/", {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(director)
    })
    const data = await response.json() as IDirector;
    return data;
}

export async function apiEliminarDirector(id: number) {
    const responsePromise = fetch(URL_API_DIRECTOR + id + "/", {
        method: 'DELETE'
    })
    const response = await responsePromise;
    return response
}


// PARA LAS PELIS
export async function apiObtenerTodasPeliculas() {
    const response = await fetch(URL_API_PELICULA, {
        method: 'GET'
    });
    if (!response.ok) {
        console.error(response.statusText)
        return [] as IPelicula[];
    }
    const data = await response.json() as IPelicula[];
    return data;
}


export async function apiActualizarPelicula(pelicula: IPelicula) {
    const response = await fetch(URL_API_PELICULA + pelicula.id + "/", {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(pelicula)
    })
    const data = await response.json() as IPelicula;
    return data;
}


export async function apiEliminarPelicula(id: number) {
    const responsePromise = fetch(URL_API_PELICULA + id + "/", {
        method: 'DELETE'
    })
    const response = await responsePromise;
    return response
}

export function apiCrearPelicula(pelicula: IPelicula) {
    const data = fetch(URL_API_PELICULA, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(pelicula)
    })
    return data;
}