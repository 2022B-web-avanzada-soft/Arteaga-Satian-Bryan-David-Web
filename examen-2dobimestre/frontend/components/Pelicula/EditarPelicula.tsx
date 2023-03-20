import {Button, Form} from "react-bootstrap";
import {IPelicula} from "../../interfaces";
import {useContext, useState} from "react";
import {ActualizarPeliculasContext} from "./ActualizarPeliculasContext";
import {apiActualizarPelicula} from "../../consumoApi";

export default function ({pelicula, handleClose}: { pelicula: IPelicula, handleClose: any }) {
    const [miPelicula, setMiPelicula] = useState(pelicula);
    const {setActualizar} = useContext(ActualizarPeliculasContext);

    const handleSubmit = (event: any) => {
        event.preventDefault();
        //Logica con el backend
        const respuesta = apiActualizarPelicula(miPelicula);
        respuesta.then((res) => {
            alert("Pelicula editada con éxito");
            setActualizar(true);
            handleClose();

        }).catch((err) => {
            console.log(err);
            alert("Error al editar pelicula");
        });
    }

    const handleTituloChange = (event: any) => {
        setMiPelicula({
            ...miPelicula,
            titulo: event.target.value,
        });
    }

    const handleAnioLanzamientoChange = (event: any) => {
        setMiPelicula({
            ...miPelicula,
            anioLanzamiento: event.target.value,
        });
    }

    const handleGeneroChange = (event: any) => {
        setMiPelicula({
            ...miPelicula,
            genero: event.target.value,
        });
    }

    const handleRentableChange = (event: any) => {
        setMiPelicula({
            ...miPelicula,
            rentable: event.target.checked,
        });
    }
    return (
        <Form onSubmit={handleSubmit} className={"mx-3 d-flex flex-column"}>
            <Form.Group className="mb-3" controlId="formId">
                <Form.Label>ID</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Ingresa el la id"
                    required={true}
                    value={miPelicula.id}
                    disabled
                    readOnly
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="titulo">
                <Form.Label>Título</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Ingresa el título"
                    required={true}
                    value={miPelicula.titulo}
                    onChange={handleTituloChange}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="anio">
                <Form.Label>Año</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Ingresa el año de lanzamiento"
                    required={true}
                    value={miPelicula.anioLanzamiento}
                    onChange={handleAnioLanzamientoChange}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="genero">
                <Form.Label>Género</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Ingresa el género"
                    required={true}
                    value={miPelicula.genero}
                    onChange={handleGeneroChange}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="rentable">
                <Form.Check
                    type="checkbox"
                    label="Fue rentable"
                    checked={miPelicula.rentable}
                    onChange={handleRentableChange}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="director">
                <Form.Label>ID Director</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Ingresa el id del director"
                    required={true}
                    value={miPelicula.director}
                    readOnly={true}
                    disabled={true}

                />
            </Form.Group>


            <Button variant="primary" type="submit" className={"align-self-center px-4"}>
                Editar
            </Button>
        </Form>
    );
}