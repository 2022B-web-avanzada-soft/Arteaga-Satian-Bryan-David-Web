import {Button, Modal, Table} from "react-bootstrap";
import {useContext, useEffect, useState} from "react";
import ModalEditarDirector from "./ModalEditarDirector";
import {IDirector} from "../../interfaces";
import {apiEliminarDirector, apiObtenerTodosDirectores} from "../../consumoApi";
import {ActualizarDirectorContext} from "./ActualizarDirectorContext";


const listaDirectoresFake: IDirector[] = [
    {
        id: 1,
        nombre: "Mark",
        genero: "Otto",
        edad: 32,
        retirado: true,
        nacionalidad: "Ecuador"
    },
    {
        id: 2,
        nombre: "Jacob",
        genero: "Thornton",
        edad: 32,
        retirado: true,
        nacionalidad: "Ecuador"
    },
    {
        id: 3,
        nombre: "Larry the Bird",
        genero: "Thornton",
        edad: 32,
        retirado: false,
        nacionalidad: "Ecuador"
    },
]


export default function ListaDirectores() {
    const [mostrarEdicion, setMostrarEdicion] = useState(false);
    const [directorSeleccionado, setDirectorSeleccionado] = useState({} as IDirector);
    const [listaDirectores, setListaDirectores] = useState([] as IDirector[]);
    const {actualizar, setActualizar} = useContext(ActualizarDirectorContext)
    const handleOpenEdicion = (director: IDirector) => {
        setDirectorSeleccionado(director);
        setMostrarEdicion(true);
    }


    const handleClose = () => {
        setMostrarEdicion(false);
    }

    const handleEliminar = (id: number) => {
        const respuesta = apiEliminarDirector(id);
        respuesta.then((res) => {
            alert("Director eliminado")
            setActualizar(true);
        }).catch((err) => {
            console.log(err);
            alert("Error al eliminar director");
        });
    }

    const obtenerListaDirectores = () => {
        const respuesta = apiObtenerTodosDirectores();
        respuesta.then((res) => {
            setListaDirectores(res);
        }).catch((err) => {
            console.log(err);
            alert("Error al obtener directores");
        });
    }

    useEffect(() => {
        console.log("useEffect")
        obtenerListaDirectores();
    }, []);


    useEffect(() => {
        //setListaDirectores(listaDirectoresFake)
        console.log("useEffect")
        if (actualizar) {
            obtenerListaDirectores();
            setActualizar(false);
        }
    }, [actualizar]);

    return (
        <>
            <h1>Lista de directores</h1>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Género</th>
                    <th>Edad</th>
                    <th>Retirado</th>
                    <th>Nacionalidad</th>
                    <th>Opciones</th>


                </tr>
                </thead>
                <tbody>
                {listaDirectores.map((director) => (
                    <tr key={director.id}>
                        <td>{director.id}</td>
                        <td>{director.nombre}</td>
                        <td>{director.genero}</td>
                        <td>{director.edad}</td>
                        <td>{director.retirado ? "Sí" : "No"}</td>
                        <td>{director.nacionalidad}</td>
                        <td className={"d-flex gap-3"}>
                            <Button variant="info" onClick={() => handleOpenEdicion(director)}>Editar</Button>
                            <Button variant="danger" onClick={() => handleEliminar(director.id)}>Eliminar</Button>
                        </td>

                    </tr>
                ))
                }
                </tbody>
            </Table>

            <ModalEditarDirector
                director={directorSeleccionado}
                mostrarEdicion={mostrarEdicion}
                handleClose={handleClose}
            />

        </>
    )
}
