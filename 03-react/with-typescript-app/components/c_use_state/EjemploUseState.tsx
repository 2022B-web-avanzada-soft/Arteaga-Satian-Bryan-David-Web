//components/c_use_state/EjemploUseState.tsx
import React, {useEffect} from "react";

interface IUsuario {
    nombre: string;
    apellido: string;
}

export default function EjemploUseState() {
    const [numero, setNumero] = React.useState(0);
    const [nombre, setNombre] = React.useState("Juan");
    const [arregloNumeros, setArregloNumeros] = React.useState([1, 2, 3, 4, 5]);
    const [usuario, setUsuario] = React.useState<IUsuario>({
        nombre: "Juan",
        apellido: "Perez",
    });

    useEffect(() => {
        console.log("useEffect");
        console.log("Inicio el componente", numero, nombre, arregloNumeros, usuario);
    }, []);

    useEffect(() => {
        console.log("useEffect");
        console.log("Cambio el numero", numero);
    }, [numero]);

    useEffect(() => {
        console.log("useEffect");
        console.log("Cambio el nombre", nombre);
    }, [nombre]);

    return (
        <div>
            <h1>Ejemplos de Use State</h1>
            <h2>Numero: {numero}</h2>
            <button onClick={() => setNumero(numero + 1)}
                    className={"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"}>Aumentar
            </button>
            <h2>Nombre: {nombre}</h2>
            <button onClick={() => setNombre("Pedro")}
                    className={"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"}>Cambiar Nombre
            </button>
            <h2>Arreglo de numeros: {arregloNumeros.join(", ")}</h2>
            <button onClick={() => {
                //get the last number of the array
                const ultimoNumero = arregloNumeros[arregloNumeros.length - 1];
                //add the last number + 1 to the array
                setArregloNumeros([...arregloNumeros, ultimoNumero + 1]);
            }} className={"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"}>Añadir numero
            </button>
        </div>
    );
}