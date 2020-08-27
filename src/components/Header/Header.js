import React from 'react';
import './Header.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Button, Navbar, Nav, Form, FormControl } from 'react-bootstrap';

const Header = () => {
    return (
    
        <>
            <Navbar bg = "primary" variant = "dark" expand = "lg" fixed="top">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">In Progress</Nav.Link>
                        <Nav.Link href="#pricing">Completed</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search your course here" className="mr-sm-2" />
                        <Button variant="outline-light">Search</Button>
                    </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    
    );
};

export default Header;