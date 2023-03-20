import {Button, Modal} from "react-bootstrap";
import {IPelicula} from "../../interfaces";
import EditarPelicula from "./EditarPelicula";

export default function (props: { pelicula: IPelicula, mostrarEdicion: boolean, handleClose: any }) {
    const {pelicula, mostrarEdicion, handleClose} = props;
    return (
        <Modal show={mostrarEdicion} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Editar Director</Modal.Title>
            </Modal.Header>
            <Modal.Body className={""}>
                <EditarPelicula pelicula={pelicula} handleClose={handleClose}/>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cerrar
                </Button>
            </Modal.Footer>
        </Modal>
    );
}