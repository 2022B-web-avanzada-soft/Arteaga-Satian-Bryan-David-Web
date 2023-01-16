//components/d_hook_custom/EjemploCustomHook.tsx
import React, {useEffect} from 'react';
import UseSelectMoneda from "../hooks/UseSelectMoneda";

export default function EjemploCustomHook() {
    const [moneda, useSelectMoneda] = UseSelectMoneda("Moneda", [
        {id: "1", nombre: "Peso Argentino"},
        {id: "2", nombre: "Dolar"},
        {id: "3", nombre: "Euro"},
    ]);

    useEffect(() => {
        console.log("Moneda seleccionada: ", moneda);
    }, [moneda]);

    return (
        <>
            {useSelectMoneda}
        </>
    )
}