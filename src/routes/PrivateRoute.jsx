import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div className='text-center mt-5' ><Spinner className='mx-auto my-auto' animation="border" variant="danger" /></div>
    }
    if (user) {
        return children;
    }
    return <Navigate state={{ from: location }} to="/login"></Navigate>;
};

export default PrivateRoute;