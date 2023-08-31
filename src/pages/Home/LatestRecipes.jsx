import React from 'react';
import Card from 'react-bootstrap/Card';

import dish1 from '../../assets/dish1.avif'
import dish2 from '../../assets/dish2.avif'
import dish3 from '../../assets/dish3.avif'
import dish4 from '../../assets/dish4.avif'
import dish5 from '../../assets/dish5.jpg'
import dish6 from '../../assets/dish6.avif'
import { FaThumbsUp, FaUser } from 'react-icons/fa';
const LatestRecipes = () => {
    return (
        <div>
            <h2 className="fw-bold text-center text-decoration-underline my-4">Latest Dish</h2>
            <div className='row'>
                <div className='col-6 col-md-4 mb-3'>
                    <Card>
                        <Card.Img variant="top" className='img-fluid' src={dish1} />
                        <Card.Body>
                            <Card.Title>Chicken Biriyani</Card.Title>
                        </Card.Body>
                        <div className='mb-2 ms-3'>
                            <p className='d-inline me-2'><FaThumbsUp></FaThumbsUp> 200+</p>
                            <p className='d-inline'> <FaUser></FaUser> 70+ </p>
                        </div>
                    </Card>
                </div>
                <div className='col-6 col-md-4 mb-3d-4 '>
                    <Card>
                        <Card.Img variant="top" className='img-fluid' src={dish2} />
                        <Card.Body>
                            <Card.Title>Grilled Chiken</Card.Title>
                        </Card.Body>
                        <div className='mb-2 ms-3'>
                            <p className='d-inline me-2'><FaThumbsUp></FaThumbsUp> 200+</p>
                            <p className='d-inline'> <FaUser></FaUser> 70+ </p>
                        </div>
                    </Card>
                </div>
                <div className='col-6 col-md-4 mb-3'>
                    <Card>
                        <Card.Img variant="top" className='img-fluid' src={dish3} />
                        <Card.Body>
                            <Card.Title>Standard Combo Dish</Card.Title>
                        </Card.Body>
                        <div className='mb-2 ms-3'>
                            <p className='d-inline me-2'><FaThumbsUp></FaThumbsUp> 200+</p>
                            <p className='d-inline'> <FaUser></FaUser> 70+ </p>
                        </div>
                    </Card>
                </div>
                <div className='col-6 col-md-4 mb-3'>
                    <Card>
                        <Card.Img variant="top" className='img-fluid' src={dish4} />
                        <Card.Body>
                            <Card.Title>Special Desert</Card.Title>
                        </Card.Body>
                        <div className='mb-2 ms-3'>
                            <p className='d-inline me-2'><FaThumbsUp></FaThumbsUp> 200+</p>
                            <p className='d-inline'> <FaUser></FaUser> 70+ </p>
                        </div>
                    </Card>
                </div>
                <div className='col-6 col-md-4 mb-3'>
                    <Card>
                        <Card.Img variant="top" className='img-fluid' src={dish5} />
                        <Card.Body>
                            <Card.Title>Grilled Fish</Card.Title>
                        </Card.Body>
                        <div className='mb-2 ms-3'>
                            <p className='d-inline me-2'><FaThumbsUp></FaThumbsUp> 200+</p>
                            <p className='d-inline'> <FaUser></FaUser> 70+ </p>
                        </div>
                    </Card>
                </div>
                <div className='col-6 col-md-4 mb-3'>
                    <Card>
                        <Card.Img variant="top" className='img-fluid' src={dish6} />
                        <Card.Body>
                            <Card.Title>Diet Dish</Card.Title>
                        </Card.Body>
                        <div className='mb-2 ms-3'>
                            <p className='d-inline me-2'><FaThumbsUp></FaThumbsUp> 200+</p>
                            <p className='d-inline'> <FaUser></FaUser> 70+ </p>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default LatestRecipes;