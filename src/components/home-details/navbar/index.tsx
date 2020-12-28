import React from 'react'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css"

export default function NavBar() {
    return (
        <div>
            <Navbar variant="dark" expand="lg" className='navbar_custom'>
                <Navbar.Brand href="">OnlineAcademy</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <NavDropdown title="Categories" id="basic-nav-dropdown">
                            <NavDropdown.Item href="">Mobile</NavDropdown.Item>
                            <NavDropdown.Item href="">Web</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-light">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
