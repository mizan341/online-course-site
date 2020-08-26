import React from 'react';
import './Header.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Button, Navbar, Nav, Form, FormControl } from 'react-bootstrap';

const Header = () => {
    return (
    <Container>
        <>
            <Navbar bg = "dark" variant = "info" expand = "lg">
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
                    <Button variant="outline-info">Search</Button>
                </Form>
                </Navbar.Collapse>
            </Navbar>
        </>
    </Container>
    );
};

export default Header;