import {useContext, useEffect, useState} from "react";
import {IPelicula} from "../../interfaces";
import {ActualizarPeliculasContext} from "./ActualizarPeliculasContext";
import {Button, Table} from "react-bootstrap";
import {apiEliminarPelicula, apiObtenerTodasPeliculas} from "../../consumoApi";
import ModalEditarDirector from "../Director/ModalEditarDirector";
import ModalEditarPelicula from "./ModalEditarPelicula";

export default function () {
    const [mostrarEdicion, setMostrarEdicion] = useState(false);
    const [peliSeleccionada, setPeliSeleccionada] = useState({} as IPelicula);
    const [listaPeliculas, setListaPeliculas] = useState([] as IPelicula[]);
    const {actualizar, setActualizar} = useContext(ActualizarPeliculasContext)

    const handleOpenEdicion = (pelicula: IPelicula) => {
        setPeliSeleccionada(pelicula);
        setMostrarEdicion(true);
    }

    const handleClose = () => {
        setMostrarEdicion(false);
    }

    const handleEliminar = (id: number) => {
        const respuesta = apiEliminarPelicula(id);
        respuesta.then((res) => {
            alert("Pelicula eliminada")
            setActualizar(true);
        }).catch((err) => {
            console.log(err);
            alert("Error al eliminar pelicula");
        });
    }

    const obtenerListaPeliculas = () => {
        const respuesta = apiObtenerTodasPeliculas();
        respuesta.then((res) => {
            setListaPeliculas(res);
        })
    }

    useEffect(() => {
        obtenerListaPeliculas();
    }, [])

    useEffect(() => {
        if (actualizar) {
            obtenerListaPeliculas();
            setActualizar(false);
        }
    }, [actualizar]);

    return (
        <>
            <h1>Lista de películas</h1>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Título</th>
                    <th>Año</th>
                    <th>Género</th>
                    <th>Rentable</th>
                    <th>Director</th>
                    <th>Opciones</th>


                </tr>
                </thead>
                <tbody>
                {listaPeliculas.map((pelicula) => (
                    <tr key={pelicula.id}>
                        <td>{pelicula.id}</td>
                        <td>{pelicula.titulo}</td>
                        <td>{pelicula.anioLanzamiento}</td>
                        <td>{pelicula.genero}</td>
                        <td>{pelicula.rentable ? "Sí" : "No"}</td>
                        <td>{pelicula.director}</td>
                        <td className={"d-flex gap-3"}>
                            <Button variant="info" onClick={() => handleOpenEdicion(pelicula)}>Editar</Button>
                            <Button variant="danger" onClick={() => handleEliminar(pelicula.id)}>Eliminar</Button>
                        </td>

                    </tr>
                ))
                }
                </tbody>
            </Table>
            <ModalEditarPelicula
                pelicula={peliSeleccionada}
                mostrarEdicion={mostrarEdicion}
                handleClose={handleClose}
            />

        </>
    )
}