import CrearDirector from "./CrearDirector";
import ListaDirectores from "./ListaDirectores";
import {useState} from "react";
import {ActualizarDirectorContext, IActualizarDirectorContext} from "./ActualizarDirectorContext";

export default function DirectorContainer() {
    const [actualizar, setActualizar] = useState(false);
    const objetoActualizarContext: IActualizarDirectorContext = {
        actualizar: actualizar,
        setActualizar: setActualizar
    }
    return (
        <div className={"d-flex justify-content-evenly mt-4"}>
            <ActualizarDirectorContext.Provider value={objetoActualizarContext}>
                <section className={"border rounded px-5 py-2"}>
                    <CrearDirector/>
                </section>
                <section>
                    <ListaDirectores/>
                </section>
            </ActualizarDirectorContext.Provider>
        </div>
    );
}