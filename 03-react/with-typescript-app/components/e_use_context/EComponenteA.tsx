import EComponenteB from "./EComponenteB";
import {useContext} from "react";
import {ContenedorContext} from "./ContenedorContext";

export default function EComponenteA() {
    const {nombreUsuario, setNombreUsuario} = useContext(ContenedorContext);
    return (
        <div>
            <p>Componente A: {nombreUsuario}</p>
            <EComponenteB/>
        </div>
    );
}