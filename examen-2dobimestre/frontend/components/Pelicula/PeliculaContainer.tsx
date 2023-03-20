import {useState} from "react";
import {ActualizarPeliculasContext, IActualizarPeliculasContext} from "./ActualizarPeliculasContext";
import CrearPelicula from "./CrearPelicula";
import ListaPeliculas from "./ListaPeliculas";

export default function PeliculaContainer() {
    const [actualizar, setActualizar] = useState(false);
    const objetoActualizarContext: IActualizarPeliculasContext = {
        actualizar: actualizar,
        setActualizar: setActualizar
    }

    return (
        <div className={"d-flex justify-content-evenly mt-4"}>
            <ActualizarPeliculasContext.Provider value={objetoActualizarContext}>
                <section className={"border rounded px-5 py-2"}>
                    <CrearPelicula/>
                </section>
                <section>
                    <ListaPeliculas/>
                </section>
            </ActualizarPeliculasContext.Provider>
        </div>
    );
}