import React, { useContext } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const LoginPage = () => {
    const { signIn, user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    console.log(user);
    const handleSignIn = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                navigate(from, { replace: true });

            })
            .catch(error => {
                console.log(error);
            })
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
                <div className='text-center'>
                    <Button variant="success" type="submit">
                        login
                    </Button>
                </div>
                <br />

                <Form.Text className="text-muted">
                    Don't have an account <Link to="/register" className='danger'>Register</Link>
                </Form.Text>

                {/* <Form.Text className="text-muted">

                </Form.Text>

                <Form.Text className="text-muted">

                </Form.Text> */}
                <br />
                <h5 className='text-center mt-3'>OR</h5>
                <div className='text-center'>
                    <button className='mx-auto btn btn-outline-danger'>Login with Google</button>
                    <br />
                    <button className=' mt-2 btn btn-outline-danger'>Login with Github</button>
                </div>
            </Form>
        </Container>
    );
};

export default LoginPage;