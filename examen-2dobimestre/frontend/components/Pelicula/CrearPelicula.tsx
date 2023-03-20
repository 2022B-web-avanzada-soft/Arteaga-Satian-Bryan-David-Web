import {Button, Form} from "react-bootstrap";
import {IDirector, IPelicula} from "../../interfaces";
import {useContext, useEffect, useState} from "react";
import {apiCrearPelicula, apiObtenerTodosDirectores} from "../../consumoApi";
import {ActualizarPeliculasContext} from "./ActualizarPeliculasContext";

export default function CrearPelicula() {

    const [nuevaPelicula, setNuevaPelicula] = useState({} as IPelicula);
    const [listaDirectores, setListaDirectores] = useState([] as IDirector[]);
    const {setActualizar} = useContext(ActualizarPeliculasContext)
    const handleSubmit = (event: any) => {
        event.preventDefault();
        console.log(nuevaPelicula);
        const respuesta = apiCrearPelicula(nuevaPelicula);
        respuesta.then((res) => {
            if (res.status === 201) {
                alert("Pelicula creada con éxito");
                setActualizar(true);
            }
        }).catch((err) => {
            console.log(err);
            alert("Error al crear pelicula");
        });
    }

    const handleTituloChange = (event: any) => {
        setNuevaPelicula({
            ...nuevaPelicula,
            titulo: event.target.value,
        });
    }

    const handleAnioChange = (event: any) => {
        setNuevaPelicula({
            ...nuevaPelicula,
            anioLanzamiento: event.target.value,
        });
    }

    const handleGeneroChange = (event: any) => {
        setNuevaPelicula({
            ...nuevaPelicula,
            genero: event.target.value,
        });
    }

    const handleRentableChange = (event: any) => {
        setNuevaPelicula({
            ...nuevaPelicula,
            rentable: event.target.checked,
        });
    }

    const handleDirectorChange = (event: any) => {
        setNuevaPelicula({
            ...nuevaPelicula,
            director: parseInt(event.target.value),
        });
    }

    const cargarListaDirectores = () => {
        const respuesta = apiObtenerTodosDirectores();
        respuesta.then((res) => {
            console.log("Se cargó la lista de directores")
            console.log(res);
            setListaDirectores(res);
        }).catch((err) => {
            console.error(err);
            alert("Error al cargar lista de directores")
        });
    }

    useEffect(() => {
        //Se carga la lista de directores
        cargarListaDirectores();
    }, []);

    return (
        <div>
            <h2>Crear película</h2>
            <Form className={"d-flex flex-column"} onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="titulo">
                    <Form.Label>Título</Form.Label>
                    <Form.Control type="text"
                                  placeholder="Ingresa el título"
                                  required={true}
                                  size={"sm"}
                                  onChange={handleTituloChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="anio">
                    <Form.Label>Año</Form.Label>
                    <Form.Control type="text"
                                  placeholder="Ingresa el año de lanzamiento"
                                  required={true}
                                  size={"sm"}
                                  onChange={handleAnioChange}

                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="genero">
                    <Form.Label>Género</Form.Label>
                    <Form.Control type="text"
                                  placeholder="Ingresa el género"
                                  required={true}
                                  size={"sm"}
                                  onChange={handleGeneroChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="rentable">
                    <Form.Check type="checkbox"
                                label="Fue rentable"
                                onChange={handleRentableChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="director">
                    <Form.Label>Director</Form.Label>
                    {
                        (listaDirectores.length == 0) ?
                            <Form.Select aria-label="Default select example" disabled={true}>
                                <option>Aún no hay directores registrados</option>
                            </Form.Select>
                            :
                            <Form.Select aria-label="Default select example" onChange={handleDirectorChange}>
                                <option>Selecciona un director</option>
                                {
                                    listaDirectores.map((director) => {
                                        return (
                                            <option key={director.id} value={director.id}>{director.nombre}</option>
                                        )
                                    })
                                }
                            </Form.Select>
                    }
                </Form.Group>


                <Button variant="primary" type="submit" className={"text-center"}>
                    Crear
                </Button>
            </Form>
        </div>
    )
}