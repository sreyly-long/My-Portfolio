import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Navbars() {
  return (
    <Navbar expand="lg" className="site-nav" collapseOnSelect>
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          <span className="brand-badge">LS</span>
          Long&nbsp;Sreyly
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-nav" />
        <Navbar.Collapse id="main-nav">
          <Nav className="ms-auto align-items-lg-center">
            <Nav.Link as={NavLink} to="/" end>Home</Nav.Link>
            <Nav.Link as={NavLink} to="/about">About</Nav.Link>
            <Nav.Link as={NavLink} to="/contact" className="nav-cta">
              Let's Talk
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Navbars;
