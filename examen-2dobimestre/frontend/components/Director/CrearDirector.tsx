import {Button, Form} from "react-bootstrap";
import {IDirector} from "../../interfaces";
import {useContext, useState} from "react";
import {apiCrearDirector} from "../../consumoApi";
import {ActualizarDirectorContext} from "./ActualizarDirectorContext";

export default function CrearDirector() {
    const [nuevoDirector, setNuevoDirector] = useState({} as IDirector);
    const {setActualizar} = useContext(ActualizarDirectorContext)
    const handleSubmit = (event: any) => {
        event.preventDefault();

        //Logica con el backend
        const respuesta = apiCrearDirector(nuevoDirector);
        respuesta.then((res) => {
            if (res.status === 201) {
                alert("Director creado con éxito");
                setActualizar(true);
            }
        }).catch((err) => {
            console.log(err);
            alert("Error al crear director");
        });
    }

    const handleNombreChange = (event: any) => {
        setNuevoDirector({
            ...nuevoDirector,
            nombre: event.target.value,
        });
    }

    const handleGeneroChange = (event: any) => {
        setNuevoDirector({
            ...nuevoDirector,
            genero: event.target.value,
        });
    }

    const handleEdadChange = (event: any) => {
        setNuevoDirector({
            ...nuevoDirector,
            edad: event.target.value,
        });
    }

    const handleRetiradoChange = (event: any) => {
        setNuevoDirector({
            ...nuevoDirector,
            retirado: event.target.checked,
        });
    }

    const handleNacionalidadChange = (event: any) => {
        setNuevoDirector({
            ...nuevoDirector,
            nacionalidad: event.target.value,
        });
    }
    return (
        <div>
            <h2>Crear director</h2>
            <Form className={"d-flex flex-column"} onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formNombre">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text"
                                  placeholder="Ingresa el nombre"
                                  required={true}
                                  size={"sm"}
                                  onChange={handleNombreChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGenero">
                    <Form.Label>Género</Form.Label>
                    <Form.Control type="text"
                                  placeholder="Ingresa el género"
                                  required={true}
                                  size={"sm"}
                                  onChange={handleGeneroChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEdad">
                    <Form.Label>Edad</Form.Label>
                    <Form.Control type="number"
                                  placeholder="Ingresa la edad"
                                  required={true}
                                  size={"sm"}
                                  onChange={handleEdadChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formRetirado">
                    <Form.Check type="checkbox"
                                label="Está retirado"
                                onChange={handleRetiradoChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formNacionalidad">
                    <Form.Label>Nacionalidad</Form.Label>
                    <Form.Control type="text"
                                  placeholder="Ingresa la nacionalidad"
                                  required={true}
                                  size={"sm"}
                                  onChange={handleNacionalidadChange}
                    />
                </Form.Group>


                <Button variant="primary" type="submit" className={"text-center"}>
                    Crear
                </Button>
            </Form>
        </div>
    );
}