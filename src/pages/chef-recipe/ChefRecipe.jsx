import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import RecipeCard from './RecipeCard';

const ChefRecipe = () => {
    const singleChef = useLoaderData();
    const { unique_id, recipe, chef_name, photo_url, experience, number, bio } = singleChef;

    return (
        <>
            <Container>
                <div>
                    <h2 className='text-center mt-4'>Know About Chef</h2>
                    <div className='d-flex border border-2 rounded p-2 mt-4 border-dark' style={{ height: '620px' }}>
                        <div className='my-auto w-50'>
                            <h4>Chef Name: {chef_name}</h4>
                            <p>Experience: {experience} </p>
                            <p>Number of recipe: {number}</p>
                            <h4>Short Bio of {chef_name}</h4>
                            <p>{bio}</p>
                        </div>
                        <div className='w-50'>
                            <img className='img-fluid' style={{ height: '600px' }} src={photo_url} alt="" />
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className='text-center mt-5'>{chef_name}'s three recipe explore</h2>
                    <div>
                        <Row xs={1} md={2} className='g-4'>
                            {
                                recipe.map(singleRecipe => <RecipeCard
                                    key={(unique_id + 1)}
                                    singleRecipe={singleRecipe}
                                >

                                </RecipeCard>)
                            }
                        </Row>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default ChefRecipe;