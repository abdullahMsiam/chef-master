import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';

const ChefNav = () => {

    const { user } = useContext(AuthContext);
    console.log(user);

    return (
        <Container>
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
                            <Link to="/" className='me-2'>Home</Link>
                            {/* <Link>Home</Link> */}
                            <Link to="/blog">Blog</Link>
                        </Nav>
                        {
                            user ?
                                <div className='d-flex align-items-center'>
                                    <FaUserCircle className='fs-2 me-1'></FaUserCircle>
                                    <Link to=""><Button variant="success">Logout</Button></Link>
                                </div> :
                                <Link to="/login"><Button variant="success">Login</Button></Link>
                        }

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default ChefNav;