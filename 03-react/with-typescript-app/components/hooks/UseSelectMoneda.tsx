import React from "react";
import {IMoneda} from "../../interfaces/moneda";

export default function (label: string, opciones: IMoneda[]) {
    // Queremos devolver un select del arreglo de monedas (html - jsx element)
    //valor de esa moneda.
    const [moneda, setMoneda] = React.useState('');
    const generarJSXElementMonedas: () => JSX.Element[] = () => {
        return opciones.map((moneda: IMoneda) => {
            // El key es un atributo especial de react que se usa para identificar
            return <option key={moneda.id} id={moneda.id} value={moneda.id}>
                {moneda.nombre}
            </option>
        })
    }

    const retornoUseSelectMoneda = (
        <>
            <label htmlFor={label} className={"form-label"}>{label}</label>
            <select
                className={"form-select"}
                name={label}
                id={label}
                value={moneda}
                onChange={(e) => {
                    e.preventDefault();
                    setMoneda(e.target.value);
                }}
            >
                <option value={""}>Seleccione una moneda</option>
                {generarJSXElementMonedas()}
            </select>
        </>
    );

    return [moneda, retornoUseSelectMoneda];
}