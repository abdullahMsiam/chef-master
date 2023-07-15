import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const handleRegister = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const photoUrl = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const createdUser = result.user
                console.log(createdUser);
            })
            .catch(error => {
                console.log(error);
            })

        console.log(email, password, photoUrl)
    }

    return (
        <Container>
            <h3 className='text-center mt-5'>Please Register</h3>
            <Form onSubmit={handleRegister} className='w-25 mx-auto mt-4'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Enter Your email</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPhoto">
                    <Form.Label>Enter Your Photo URL</Form.Label>
                    <Form.Control type="text" name='photo' placeholder="Enter Your Photo-url" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required />
                </Form.Group>
                <Button variant="success" type="submit">
                    Register
                </Button>

                <br />

                <Form.Text className="text-muted">
                    Have an account already? <Link to="/login" className='danger'>Login</Link>
                </Form.Text>

                {/* <Form.Text className="text-muted">

                </Form.Text>

                <Form.Text className="text-muted">

                </Form.Text> */}
            </Form>
        </Container>
    );
};

export default Register;