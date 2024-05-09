import { Container, Nav, Navbar } from "react-bootstrap";

const ComponentNavbar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary ">
      <Container fluid>
        <Navbar.Brand href="#home">Spaceflight News</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link eventKey={2} href="#memes">
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default ComponentNavbar;
