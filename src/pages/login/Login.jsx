import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';



const Login = () => {
    const handleSignIn = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

    }
    return (
        <Container>
            <h3 className='text-center mt-5'>Please Login</h3>
            <Form onSubmit={handleSignIn} className='w-25 mx-auto mt-4'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Enter Your email</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required />
                </Form.Group>
                <Button variant="success" type="submit">
                    login
                </Button>

                <br />

                <Form.Text className="text-muted">
                    {/* Don't have an account <Link to="/register" className='danger'>Register</Link> */}
                </Form.Text>

                {/* <Form.Text className="text-muted">

                </Form.Text>

                <Form.Text className="text-muted">

                </Form.Text> */}
            </Form>
        </Container>
    );
};

export default Login;