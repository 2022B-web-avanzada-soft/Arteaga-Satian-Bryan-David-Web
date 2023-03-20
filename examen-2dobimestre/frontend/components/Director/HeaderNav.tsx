import {Container, Nav, Navbar} from "react-bootstrap";

export default function HeaderNav() {
    return (
        <Navbar bg="light" variant="light">
            <Container className={"w-100"}>
                <Navbar.Brand href="/director">Aplicaciones Web Avanzadas</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/director">Director</Nav.Link>
                    <Nav.Link href="/pelicula">Película</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}