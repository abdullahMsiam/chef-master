import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ChefNav = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand href="#" className='fw-bold'>Chef-MASTER</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="mx-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Link>Home</Link>
                        <Link>Home</Link>
                        <Link>Blog</Link>
                    </Nav>
                    <Button variant="success">Login</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default ChefNav;