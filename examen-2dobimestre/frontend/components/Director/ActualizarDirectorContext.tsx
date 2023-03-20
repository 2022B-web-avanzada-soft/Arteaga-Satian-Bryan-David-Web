import {createContext, Dispatch, SetStateAction} from "react";

export interface IActualizarDirectorContext {
    actualizar: boolean;
    setActualizar:  Dispatch<SetStateAction<boolean>>
}
export const ActualizarDirectorContext = createContext<IActualizarDirectorContext>({} as IActualizarDirectorContext);
