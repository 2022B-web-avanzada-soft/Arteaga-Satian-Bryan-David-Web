import EComponenteC from "./EComponenteC";
import {useContext} from "react";
import {ContenedorContext} from "./ContenedorContext";

export default function EComponenteB() {
    const {nombreUsuario, setNombreUsuario} = useContext(ContenedorContext);
    return (
        <div>
            <p>Componente B: {nombreUsuario}</p>
            <EComponenteC/>
        </div>
    );
}