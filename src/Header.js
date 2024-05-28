import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { NavLink } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Header.css';

// Import your logo image
import logo from './imgs/logo.png';

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="custom-navbar py-3 pl-3">
      <Container fluid>
        {/* Replace the text with your logo image */}
        <Navbar.Brand href="#" className="navbar-brand" style={{ paddingLeft: 30 }}>
          <img
            src={logo}
            width="130"
            height="130"
            className="d-inline-block align-top"
            alt="Your Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav>
            <NavLink href="/" className="nav-link">HOME</NavLink>
            <NavDropdown  title=<b className='mer'>PROGRAMS</b> menuVariant='dark'>
              <NavDropdown.Item href="/bba"> BBA</NavDropdown.Item>
              <NavDropdown.Item href="/acca">ACCA</NavDropdown.Item>
              <NavDropdown.Item href="/ca">CA</NavDropdown.Item>
              <NavDropdown.Item href="/finance">BS Accounting & Finance</NavDropdown.Item>
              
            </NavDropdown>
            <NavLink href="/about" className="nav-link">ABOUT</NavLink>
            <NavLink href="/contact" className="nav-link">CONTACT</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;