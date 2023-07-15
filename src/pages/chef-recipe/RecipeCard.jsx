import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { FaRegHeart } from 'react-icons/fa';

const RecipeCard = ({ singleRecipe }) => {
    const { name, ingredients, method, rating } = singleRecipe;
    return (
        <Col>
            <Card className='p-3'>
                <div>
                    <Card.Title>{name}</Card.Title>
                    <div className='mt-2'>
                        <>
                            <h6 className='d-inline'>Ingredients: </h6>
                            {
                                ingredients.map(n => <p className='d-inline'
                                    key={n}>
                                    {n},
                                </p>)
                            }
                        </>
                    </div>

                    <div>
                        <h6 className='d-inline'>Cocking Method: </h6>
                        <p className='d-inline'>{method}</p>
                        <div className='d-flex mt-2 p-3 justify-content-center'>
                            <h6 className='me-auto'>Rating: {rating}</h6>
                            <button>
                                <FaRegHeart></FaRegHeart>
                            </button>
                        </div>
                    </div>
                </div>
            </Card>
        </Col>
    );
};

export default RecipeCard;