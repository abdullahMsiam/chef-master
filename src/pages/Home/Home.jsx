import React, { useEffect, useState } from 'react';
import { Card, CardGroup, Container, Row } from 'react-bootstrap';
import ChefCard from './ChefCard';
import myImage from '../../assets/banner.avif'

const Home = () => {

    const [chefs, setChefs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/chefs')
            .then(res => res.json())
            .then(data => setChefs(data))
            .catch(error => console.log(error))
    }, [])
    return (
        <Container>
            <div>
                <Card className="bg-dark text-white mt-5">
                    <Card.Img src={myImage} alt="Card image" />

                    <Card.ImgOverlay className='my-auto mt-lg-5'>
                        <Card.Title className='fw-bold text-dark mt-lg-5 py-auto fs-2'>CHEF-MASTER</Card.Title>
                        <Card.Text className='mt-lg-4 fs-5 text-dark'>
                            Our service is providing a perfect chef to you. <br />
                            We are very concern about your test and want to ensure <br></br> what kind of test you interested! <br />
                            Our service is providing a perfect chef to you.
                        </Card.Text>
                    </Card.ImgOverlay>
                </Card>
            </div>
            <div>
                <h3 className='text-center mt-5'>All Chefs Here</h3>
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
        </Container>
    );
};

export default Home;