import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';

import Logo from "../assets/LOGO 1.jpg";
import ModalContact from './ModalContact';

export default function Menu() {
  const [modalShow, setModalShow] = React.useState(false);


  return (
    <Navbar className='bg-light' variant="light" expand="md" widht="100%">
      <Container>
        <Navbar.Brand href="#home"><img id="logo" src={Logo} alt="Logotipo"  widht={80} height={80}  style={ {   borderTopLeftRadius : "50%" ,
                            BorderTopRightRadius: "50%",
                            BorderBottomRightRadius:"50%",
                            BorderBottomLeftRadius: "50%"}}     
        /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='text-center justify-content-end'>
          <Nav className="justify-content-center">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#promocoes">Promoções</Nav.Link>
            <Nav.Link href="#contato">Contato</Nav.Link>
            <Button variant='success'className='btnOrcamento' onClick={() => setModalShow(true)}>Solicite orçamento</Button>

        
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}