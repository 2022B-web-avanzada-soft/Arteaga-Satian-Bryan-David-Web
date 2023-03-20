import {Button, Modal} from "react-bootstrap";
import {IDirector} from "../../interfaces";
import EditarDirector from "./EditarDirector";

export default function ModalEditarDirector(props :{director: IDirector, mostrarEdicion: boolean, handleClose: any}) {
    const {director, mostrarEdicion, handleClose} = props;
    return (
        <Modal show={mostrarEdicion} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Editar Director</Modal.Title>
            </Modal.Header>
            <Modal.Body className={""}>
                <EditarDirector director={director} handleClose={handleClose}/>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cerrar
                </Button>
            </Modal.Footer>
        </Modal>
    )
}