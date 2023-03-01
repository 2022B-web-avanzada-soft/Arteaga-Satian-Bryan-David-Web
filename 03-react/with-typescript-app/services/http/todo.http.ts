//Obtenemos datos de una fake api.
export interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

export async function TodoHttp(id?: string) {
    const url = `https://jsonplaceholder.typicode.com/todos${id ? `/${id}` : ''}`;
    const respuesta = await fetch(url);
    //Si es un id, lo convertimos en un array de un solo elemento.
    if (id) {
        const auxiliar = await respuesta.json()
        return [auxiliar] as Todo[];
    }
    return await respuesta.json() as Todo[];
}