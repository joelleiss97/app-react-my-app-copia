
import {Navbar, Nav, Container} from "react-bootstrap";
import {  Link } from "react-router-dom";
import LogoDonuts from "../logoDonuts2.png"
import './NavBar.css'
import CartWidget from "./CartWidget";
function NavBarExample  ()  {
    return(
        <>
        
        <Navbar className="navBg" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/" className="LogoNav"  >
                    <img src={LogoDonuts} alt="logoDonuts2.png"></img>     
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/Productos">Productos</Nav.Link>
                    <Nav.Link as={Link} to="/Contacto">Contacto</Nav.Link>
                    <CartWidget></CartWidget>
                </Nav>
                
                </Navbar.Collapse>
                
            </Container>
        </Navbar>
        

        
        </>
  
  );
}


export default NavBarExample;