//components/a_estilos/EstilosEjemplo.tsx

import React from 'react';
import styles from './estilos.module.css';

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
        </>
    );
};
