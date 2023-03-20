import {createContext, Dispatch, SetStateAction} from "react";

export interface IActualizarPeliculasContext {
    actualizar: boolean;
    setActualizar:  Dispatch<SetStateAction<boolean>>
}

export const ActualizarPeliculasContext = createContext<IActualizarPeliculasContext>({} as IActualizarPeliculasContext);