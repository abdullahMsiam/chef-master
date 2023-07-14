import React from 'react';
import ChefNav from '../pages/chefNav/ChefNav';
import Footer from '../pages/footer/Footer';
import { Outlet } from 'react-router-dom';
import Home from '../pages/Home/Home';
const Main = () => {
    return (
        <div>
            <ChefNav></ChefNav>
            <Home></Home>
            <Footer></Footer>
        </div>
    );
};

export default Main;