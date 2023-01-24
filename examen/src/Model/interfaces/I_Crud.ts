export default interface ICRUD<T>{
    crear(entidad: T): Promise<T>;
    buscar(id: number): Promise<T>;
    buscarTodos(): Promise<T[]>;
    buscarPorNombre(nombre: string): Promise<T>;
    actualizar(entidad: T): Promise<T>;
    eliminar(id: number): Promise<T>;
}