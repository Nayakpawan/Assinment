// eslint-disable-next-line no-unused-vars
import React from "react";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import '../Styles/Header.scss'
import { CiSearch } from "react-icons/ci";
const Header = () => {
  return (
    <>
    {['md'].map((expand) => (
      <Navbar sticky="top" key={expand} expand={expand} className="Navbar-color mb-3">
        <Container>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className="close-nav" />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header closeButton className="bg-dark">
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} className="text-white">
                
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="justify-content-center">
              <Nav activeKey="/home" className="white">
                <Nav.Item >
                  <Form.Control
                    type="text"
                    className="mr-sm-2"
                  />
                  <CiSearch className="search-icon" />
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/categories" className="mr-sm-2 navlink text-white">Categories</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-1" className="navlink text-white">Website Builders</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-2" className="navlink text-white">Today deals</Nav.Link>
                </Nav.Item>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
  
    ))}
  </>
  )
}

export default Header;