//components/d_hook_custom/EjemploCustomHook.tsx
import React, {useEffect} from 'react';
import UseSelectMoneda from "../hooks/UseSelectMoneda";
import {MONEDAS} from "./monedas";

export default function EjemploCustomHook() {
    const [moneda, useSelectMoneda] = UseSelectMoneda("Moneda", MONEDAS);

    useEffect(() => {
        console.log("Moneda seleccionada: ", moneda);
    }, [moneda]);

    return (
        <>
            {useSelectMoneda}
        </>
    )
}