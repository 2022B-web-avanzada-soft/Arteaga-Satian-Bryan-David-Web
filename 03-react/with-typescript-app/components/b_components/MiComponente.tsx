// b_components/MiComponente.tsx
import React from "react";

interface PropiedadesComponente {
    url: string;
    iteraciones: number;
    mostrar?: boolean;
}

export default function MiComponente(props: PropiedadesComponente) {
    const {url, iteraciones, mostrar} = props;
    const [contador, setContador] = React.useState(iteraciones);

    const contenidoCondicional= () => {
        if (mostrar) {
            return <p>Contenido condicional</p>
        }
        return <></>
    }
    return (
        <div>
            <h1>Mi componente {url}</h1>
            <a href={url} target={"_blank"}>Ir a google</a>
            {mostrar && contenidoCondicional()}
            <div>
                {iteraciones}
            </div>
            <div>
                {contador}
            </div>
            <button
                className={'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'}
                onClick={() => {setContador(contador+1)}}
            >Aumentar </button>

        </div>
    );
};
