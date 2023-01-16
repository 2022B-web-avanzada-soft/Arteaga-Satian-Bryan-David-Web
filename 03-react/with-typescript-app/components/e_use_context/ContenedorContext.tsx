import {createContext, Dispatch, SetStateAction} from "react";

export interface IContenedorContext {
    nombreUsuario: string;
    setNombreUsuario:  Dispatch<SetStateAction<string>>
}
export const  ContenedorContext = createContext<IContenedorContext>({} as IContenedorContext);