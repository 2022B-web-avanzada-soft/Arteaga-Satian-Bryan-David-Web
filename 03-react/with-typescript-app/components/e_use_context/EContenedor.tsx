import {ContenedorContext, IContenedorContext} from "./ContenedorContext";
import EComponenteA from "./EComponenteA";
import {useState} from "react";

export default function EContenedor() {
    const [nombreUsuario, setNombreUsuario] = useState("David");
    const objetoContenedorContext: IContenedorContext = { nombreUsuario, setNombreUsuario };
    return (
        <div>
            <ContenedorContext.Provider value={objetoContenedorContext}>
                <EComponenteA/>
            </ContenedorContext.Provider>
        </div>
    );
}