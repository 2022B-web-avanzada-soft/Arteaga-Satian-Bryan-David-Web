import {useContext} from "react";
import {ContenedorContext} from "./ContenedorContext";

export default function EComponenteC() {
    const {nombreUsuario, setNombreUsuario} = useContext(ContenedorContext);
    return (
        <div>
            <p>Componente C: {nombreUsuario}</p>
            <button onClick={() => {
                (nombreUsuario === "David") ? setNombreUsuario("Juan") : setNombreUsuario("David");

            }} className={"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"}>Cambiar nombre de
                usuario
            </button>
        </div>
    );
}