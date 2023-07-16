import React from 'react';
import { Card, Col, Container } from 'react-bootstrap';
import { FaRegHeart } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';

const RecipeCard = ({ singleRecipe }) => {

    const notify = () => {
        toast('Your recipe is added to favorite', {
            position: "top-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "light",
        })
    }
    const { name, ingredients, method, rating } = singleRecipe;
    return (
        <div>
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
                                <div>
                                    <button onClick={notify}>
                                        <FaRegHeart></FaRegHeart>
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>

                </Card>
            </Col>
            <ToastContainer
                position="top-left"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable={false}
                pauseOnHover={false}
                theme="light"
            />
        </div>

    );
};

export default RecipeCard;