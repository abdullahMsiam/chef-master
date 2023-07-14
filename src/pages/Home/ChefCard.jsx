import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { FaRegHeart } from 'react-icons/fa';

const ChefCard = ({ chef }) => {
    const { chef_name, unique_id, photo_url, experience, number } = chef;
    return (
        <Col>
            <Card>
                <Card.Img className='w-75' variant="top" src={photo_url} />
                <Card.Body>
                    <Card.Title>{chef_name}</Card.Title>
                    <div className='d-flex mt-3'>
                        <h6>Experience: {experience}</h6>
                        <h6 className='ms-auto'>Recipe Number: {number}</h6>
                    </div>
                    <div className=' mt-4 d-flex align-items-center'>
                        <Button variant="danger">View Recipe</Button>
                        <FaRegHeart className='ms-auto'></FaRegHeart>
                    </div>
                </Card.Body>
            </Card>
        </Col>



    );
};

export default ChefCard;