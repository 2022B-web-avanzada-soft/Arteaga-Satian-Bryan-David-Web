// b_components/MiComponente.tsx
import React from "react";

interface PropiedadesComponente {
    url: string;
    iteraciones: number;
    mostrar: boolean;
}

export default function MiComponente(props: PropiedadesComponente) {
    const {url, iteraciones, mostrar} = props;
    return (
        <div>
            <h1>Mi componente {url}</h1>
            <a href={url} target={"_blank"}>Ir a google</a>
            {mostrar && <p>Mostrar es true</p>}
            <div>
                {iteraciones}
            </div>

        </div>
    );
};
