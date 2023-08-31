import React, { useEffect, useState } from 'react';
import { Card, CardGroup, Col, Container, Row } from 'react-bootstrap';
import ChefCard from './ChefCard';
import myImage from '../../assets/banner.jpg'
import { FaCarSide, FaDollarSign, FaDove, FaHamburger, FaPizzaSlice, FaGlassCheers, FaHome } from 'react-icons/fa';
import BestRecipe from './BestRecipe';

const Home = () => {

    const [chefs, setChefs] = useState([]);

    useEffect(() => {
        fetch('https://chef-master-server-abdullahmsiam.vercel.app/chefs')
            .then(res => res.json())
            .then(data => setChefs(data))
            .catch(error => console.log(error))
    }, [])
    return (
        <Container>
            {/* banner */}
            <div className='pt-3 mx-auto'>
                <div className='d-md-flex gap-4 align-items-baseline'>
                    <div className='w-100'>
                        <img className='img-fluid' src={myImage} alt="" />
                    </div>
                    <div className='mx-auto w-100 text-center text-md-start'>
                        <h2 className='fw-bold mb-4'>Hello from Chef-MASTER</h2>
                        <p>Our service is providing a perfect chef to you.
                            We are very concern about your test and want to ensure what kind of test you interested!
                            Our service is providing a perfect chef to you</p>
                    </div>
                </div>
            </div>

            {/* latest recipes */}

            <h2 className='mt-5 mb-3 text-center fw-bold text-decoration-underline'>Recipe categories</h2>
            <div>
                <Row xs={2} className=' text-center'>
                    <Col className='rounded-0 py-5 bg-success-subtle'>
                        <FaHamburger className='fs-1 mb-3'></FaHamburger> <br />
                        <h5>Burger</h5>
                    </Col>
                    <Col className='border py-5 rounded bg-success-subtle'>
                        <FaPizzaSlice className='fs-1 mb-3'></FaPizzaSlice> <br />
                        <h5>Pizza</h5>
                    </Col>
                    <Col className='border py-5 rounded bg-success-subtle'>
                        <FaGlassCheers className='fs-1 mb-3'></FaGlassCheers> <br />
                        <h5>Family Party</h5>
                    </Col>
                    <Col className='border py-5 rounded bg-success-subtle'>
                        <FaHome className='fs-1 mb-3'></FaHome> <br />
                        <h5>Home Made</h5>
                    </Col>

                </Row>
            </div>
            {/* chef section  */}
            <div>
                <h3 className='text-center mt-5 text-decoration-underline fw-bold'>Our Chefs</h3>
                <Row xs={1} md={3} className="g-4">
                    {
                        chefs.map(chef => <ChefCard
                            key={chef.unique_id}
                            chef={chef}
                        >
                        </ChefCard>)
                    }
                </Row>
            </div>
            {/* Best recipe section  */}
            <div>
                <BestRecipe></BestRecipe>
            </div>

            <h2 className='text-center mt-5'>How we work</h2>
            <Row xs={1} md={3} className='g-4 text-center mt-2 px-4'>


                <Col className='border rounded py-5'>
                    <div>
                        <FaCarSide className='fs-1'></FaCarSide> <br />
                        <p>We delivery all product.</p>
                    </div>
                </Col>
                <Col className='border rounded py-5'>
                    <div>
                        <FaDollarSign className='fs-1 mb-2'></FaDollarSign> <br />
                        <p>We are good with finance.</p>
                    </div>
                </Col>
                <Col className='border rounded py-5'>
                    <div>
                        <FaDove className='fs-1 mb-2'></FaDove> <br />
                        <p>Protest any violence.</p>
                    </div>
                </Col>
            </Row>


        </Container>
    );
};

export default Home;