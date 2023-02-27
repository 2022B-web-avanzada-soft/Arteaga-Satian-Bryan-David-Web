// pages/a_hola_mundo.tsx
import React from 'react';
import EstilosEjemplo from "../components/a_estilos/EstilosEjemplo";
import MiComponente from "../components/b_components/MiComponente";
import Layout from "../components/Layout";

export default function a_hola_mundo() {
    return (
        <div>
            <Layout title={"A Hola Mundo | EPN"}></Layout>
            <h1>Hola Mundo</h1>
            <EstilosEjemplo />
            <MiComponente url={'https://www.google.com'} iteraciones={3} mostrar={true}/>
        </div>
    );
};
