//components/a_estilos/EstilosEjemplo.tsx

import React from 'react';
import styles from './estilos.module.css';
import styled from "@emotion/styled";


// Styled components
const Titulo = styled.h1`
    font-size: 2rem;
    text-transform: uppercase;
    color: orange;
`;

const TituloRojo = styled.h1`
    font-size: 1.5rem;
    text-transform: capitalize;
    color: red;
`;

const Subtitulo = styled.h2`
    font-size: 1.5rem;
    text-transform: capitalize;
    color: green;
`;

export default function EstilosEjemplo() {

    const misEstilos = {
        color: 'white',
        backgroundColor: 'blue',
        borderBottom: '5px solid yellow',
    }
    return (
        <>
            <div className={styles.rojo}>
                Aquí estilos.
            </div>
            <div style={misEstilos}>Otros estilos</div>
            <Titulo>Esto es un título</Titulo>
            <TituloRojo>Esto es un título rojo</TituloRojo>
            <Subtitulo>Esto es un subtitulo</Subtitulo>
        </>
    );
};
