import React, { useEffect, useState } from 'react';
import { Card, CardGroup, Container, Row } from 'react-bootstrap';
import ChefCard from './ChefCard';

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
                <h3>All Chefs Here</h3>
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