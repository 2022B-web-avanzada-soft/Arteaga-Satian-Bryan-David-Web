import ICRUD from "./interfaces/I_Crud";
import {IPelicula} from "./interfaces/Entidades";
import {guardarArrayJSON, guardarJSON, leerArrayJSON} from "../Business/OperacionesArchivo";

export class PeliculaDAO implements ICRUD<IPelicula> {

    private rutaArchivo: string;

    constructor(rutaArchivo: string) {
        this.rutaArchivo = rutaArchivo;
    }

    async crear(entidad: IPelicula): Promise<IPelicula> {
        await guardarJSON(this.rutaArchivo, entidad);
        return entidad;
    }

    async buscarTodos(): Promise<IPelicula[]> {
        return await leerArrayJSON(this.rutaArchivo) as IPelicula[];
    }

    async buscar(id: number): Promise<IPelicula> {
        const lista = await this.buscarTodos();
        const peliEncontrada = lista.find((peli) => peli.id === id);
        return peliEncontrada;
    }

    async buscarPorNombre(nombre: string): Promise<IPelicula> {
        const lista = await this.buscarTodos();
        return lista.find((ent) => ent.titulo === nombre);
    }

    async actualizar(entidad: IPelicula): Promise<IPelicula> {
        const lista = await this.buscarTodos();
        const indice = lista.findIndex(
            (peli) => {
                return peli.id === peli.id;
            }
        );
        lista[indice] = entidad;
        await guardarArrayJSON(this.rutaArchivo, lista);
        return lista[indice];
    }

    async eliminar(id: number): Promise<IPelicula> {
        const lista = await this.buscarTodos();
        const indice = lista.findIndex(
            (peli) => {
                return peli.id === id;
            }
        );
        lista.splice(indice, 1);
        await guardarArrayJSON(this.rutaArchivo, lista);
        return lista[indice];
    }

    async obtenerNuevoId(): Promise<number> {
        const lista = await this.buscarTodos();
        if (lista.length === 0) {
            return 1;
        }
        const listaIds = lista.map((peli) => peli.id);
        const maxId = Math.max(...listaIds);
        return maxId + 1;
    }

}