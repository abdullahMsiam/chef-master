import React from 'react';
import { useRouteError } from 'react-router-dom';
import errorImage from '../../assets/error.avif';

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className='text-center mt-5'>
            <h1>OPPs! Sorry, Nothing is found</h1>
            <img src={errorImage} className='img-fluid' alt="" />
        </div>
    );
};

export default ErrorPage;