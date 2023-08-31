import React from 'react';
import Carousel from 'react-bootstrap/Carousel';


import img1 from '../../assets/img1.avif'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.avif'
const BestRecipe = () => {
    return (
        <div>
            <h2 className='text-center fw-bold text-decoration-underline my-4'>Top Dish</h2>
            <div className='d-md-flex mx-auto gap-5 justify-content-between align-items-center border border-1 rounded-2'>
                <div className='w-100'>
                    <Carousel>
                        <Carousel.Item>
                            <img src={img1} className='img-fluid rounded-3' alt="" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={img2} className='img-fluid rounded-3' alt="" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={img3} className='img-fluid rounded-3' alt="" />
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div className='w-100'>
                    <h2 className="fw-bold text-center mb-4">Kacci Biriyani</h2>
                    <p className='text-justify'>Biryani is a flavorful South Asian dish made with fragrant Basmati rice, aromatic spices, and either tender meat, poultry, fish, or vegetables. The ingredients are layered and cooked together to infuse rich flavors. Biryani is known for its diverse regional variations, each offering a unique taste profile. It's often accompanied by raita (yogurt side dish) and is a centerpiece of celebrations and special occasions.</p>
                </div>
            </div>
        </div>
    );
};

export default BestRecipe;