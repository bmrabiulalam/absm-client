import React from 'react';
import Footer from '../../shared/Footer/Footer';
import Navbar from '../../shared/Navbar/Navbar';
import Login from '../Login/Login';

const LoginHome = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Login></Login>
            <Footer></Footer>
        </div>
    );
};

export default LoginHome;