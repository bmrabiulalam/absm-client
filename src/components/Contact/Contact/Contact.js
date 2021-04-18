import React from 'react';
import Footer from '../../shared/Footer/Footer';
import Navbar from '../../shared/Navbar/Navbar';
import ContactList from '../ContactList/ContactList';

const Contact = () => {
    return (
        <div>
            <Navbar></Navbar>
            <ContactList></ContactList>
            <Footer></Footer>
        </div>
    );
};

export default Contact;