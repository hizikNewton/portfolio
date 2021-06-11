import { Container, Nav, Navbar } from "react-bootstrap";
import MeBrand from "../../assets/img/me.jpg";
import { MyImage } from "./style";

interface Props {}

export const Header = (props: Props) => {
  return (
    <Container>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">
          <MyImage src={MeBrand} />
          BAMIDELE ISAAC
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#resume">Resume</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};
