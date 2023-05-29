import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
function BasicExample() {
  return (
    <Navbar expand="lg" className="navbar">
      <Container>
        <Navbar.Brand href="#home">
          <img
            className="navbar-image"
            alt="CareStream Logo"
            src="https://carestreamagency.files.wordpress.com/2020/07/cropped-medium-1.png"
          ></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav navbarScroll className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#service-section">Services</Nav.Link>
            <Nav.Link href="#about-section">About</Nav.Link>
            <Nav.Link href="#contact-section">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
