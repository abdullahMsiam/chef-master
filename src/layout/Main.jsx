import React from 'react';
import ChefNav from '../pages/chefNav/ChefNav';
import Footer from '../pages/footer/Footer';
import { Outlet } from 'react-router-dom';
const Main = () => {
    return (
        <div>
            <ChefNav></ChefNav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;