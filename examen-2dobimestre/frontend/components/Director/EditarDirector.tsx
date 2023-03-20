import {IDirector} from "../../interfaces";
import {Button, Form} from "react-bootstrap";
import {useContext, useState} from "react";
import {apiActualizarDirector} from "../../consumoApi";
import {ActualizarDirectorContext} from "./ActualizarDirectorContext";

export default function EditarDirector({director, handleClose}: { director: IDirector, handleClose: any }) {

    const [miDirector, setMiDirector] = useState(director);
    const {setActualizar} = useContext(ActualizarDirectorContext)
    const handleChangeNombre = (e: any) => {
        setMiDirector({...miDirector, nombre: e.target.value});
    }

    const handleChangeGenero = (e: any) => {
        setMiDirector({...miDirector, genero: e.target.value});
    }

    const handleChangeEdad = (e: any) => {
        setMiDirector({...miDirector, edad: e.target.value});
    }

    const handleChangeRetirado = (e: any) => {
        setMiDirector({...miDirector, retirado: e.target.checked});
    }

    const handleChangeNacionalidad = (e: any) => {
        setMiDirector({...miDirector, nacionalidad: e.target.value});

    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const respuesta = apiActualizarDirector(miDirector);
        respuesta.then((res) => {
            alert("Director editado con éxito");
            setActualizar(true);
            handleClose();

        }).catch((err) => {
            console.log(err);
            alert("Error al editar director");
        });
    }
    return (
        <Form onSubmit={handleSubmit} className={"mx-3 d-flex flex-column"}>
            <Form.Group className="mb-3" controlId="formId">
                <Form.Label>ID</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Ingresa el nombre"
                    required={true}
                    value={miDirector.id}
                    disabled
                    readOnly
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formNombre">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Ingresa el nombre"
                    required={true}
                    value={miDirector.nombre}
                    onChange={handleChangeNombre}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGenero">
                <Form.Label>Género</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Ingresa el género"
                    required={true}
                    value={miDirector.genero}
                    onChange={handleChangeGenero}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEdad">
                <Form.Label>Edad</Form.Label>
                <Form.Control
                    type="number"
                    placeholder="Ingresa la edad"
                    required={true}
                    value={miDirector.edad}
                    onChange={handleChangeEdad}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formRetirado">
                <Form.Check
                    type="checkbox"
                    label="Está retirado"
                    checked={miDirector.retirado}
                    onChange={handleChangeRetirado}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formNacionalidad">
                <Form.Label>Nacionalidad</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Ingresa la nacionalidad"
                    required={true}
                    value={miDirector.nacionalidad}
                    onChange={handleChangeNacionalidad}
                />
            </Form.Group>


            <Button variant="primary" type="submit" className={"align-self-center px-4"}>
                Editar
            </Button>
        </Form>
    );
}