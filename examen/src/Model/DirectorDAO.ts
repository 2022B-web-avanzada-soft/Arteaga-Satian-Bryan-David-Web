import ICRUD from "./interfaces/I_Crud";
import {IDirector} from "./interfaces/Entidades";
import {guardarArrayJSON, guardarJSON, leerArrayJSON} from "../Business/OperacionesArchivo";


export class DirectorDAO implements ICRUD<IDirector> {
    private readonly rutaArchivo: string;

    constructor(rutaArchivo: string) {
        this.rutaArchivo = rutaArchivo;
    }

    async crear(entidad: IDirector): Promise<IDirector> {
        await guardarJSON(this.rutaArchivo, entidad);
        return entidad;
    }

    async buscarTodos(): Promise<IDirector[]> {
        return await leerArrayJSON(this.rutaArchivo) as IDirector[];
    }

    async buscar(id: number): Promise<IDirector> {
        const lista = await this.buscarTodos();
        return lista.find((ent) => ent.id === id);
    }

    async buscarPorNombre(nombre: string): Promise<IDirector> {
        const lista = await this.buscarTodos();
        return lista.find((ent) => ent.nombres === nombre);
    }

    async actualizar(entidad: IDirector): Promise<IDirector> {
        const lista = await this.buscarTodos();
        const indice = lista.findIndex(
            (dir) => {
                return dir.id === entidad.id;
            }
        );
        lista[indice] = entidad;
        await guardarArrayJSON(this.rutaArchivo, lista);
        return lista[indice];
    }

    async eliminar(id: number): Promise<IDirector> {
        const lista = await this.buscarTodos();
        const indice = lista.findIndex(
            (dir) => {
                return dir.id === id;
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
        const listaIds = lista.map((dir) => dir.id);
        const maxId = Math.max(...listaIds);
        return maxId + 1;
    }


}