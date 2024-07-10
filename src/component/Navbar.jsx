import { useState } from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

const NavigationBars = () => {
  

  return (
    <>
      <Navbar bg="light" expand="lg" shadow="sm">
        <Container>
          <Navbar.Brand href="#">M.Kamal</Navbar.Brand>
          {/* Use the correct prop name: 'onClick' instead of 'onClick' */}
          <Navbar.Toggle  aria-controls="offcanvasNavbar" />
          <Navbar.Collapse className="justify-content-end">
            <Nav className="ml-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown title="Dropdown" id="navbar-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    
    </>
  );
};

export default NavigationBars;
