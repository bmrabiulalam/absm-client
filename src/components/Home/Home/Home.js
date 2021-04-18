import React from 'react';
import Footer from '../../shared/Footer/Footer';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Clients from '../Clients/Clients';
import Comments from '../Comments/Comments';
import Blog from '../Blog/Blog';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <Clients></Clients>
            <Comments></Comments>
            <Blog></Blog>
            <Footer></Footer>
        </div>
    );
};

export default Home;