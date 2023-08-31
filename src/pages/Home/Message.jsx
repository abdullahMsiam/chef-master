import React from 'react';
import Form from 'react-bootstrap/Form';

const Message = () => {
    return (
        <div className='w-75 mx-auto'>
            <h2 className="fw-bold text-center text-decoration-underline mt-5 my-4">Your Message</h2>
            <div className='bg-dark-subtle p-4 rounded-4'>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label className='fw-bold fs-4'>Your Name</Form.Label>
                        <Form.Control type="text" placeholder="Jhon Watson" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label className='fw-bold fs-4'>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@some.com" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label className='fw-bold fs-4'>Message</Form.Label>
                        <Form.Control as="textarea" placeholder='what you want to say' rows={3} />
                    </Form.Group>
                    <input type="submit" value="Send Message" className='btn btn-success w-100' />
                </Form>
            </div>
        </div>
    );
};

export default Message;