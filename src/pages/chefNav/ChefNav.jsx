import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';

const ChefNav = () => {

    const { user, logout } = useContext(AuthContext);
    // console.log(user);
    const handleLogout = () => {
        logout()
            .then()
            .catch(error => console.log(error))
    }

    return (
        <div className='fixed-top '>
            <Navbar expand="lg" className="bg-body-tertiary bg-opacity-25">
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
                                    <Link onClick={handleLogout}><Button variant="success">Logout</Button></Link>
                                </div> :
                                <Link to="/login"><Button variant="success">Login</Button></Link>
                        }

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default ChefNav;