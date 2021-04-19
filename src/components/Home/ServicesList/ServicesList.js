import React, { useEffect, useState } from 'react';
import ServicesDetail from '../ServicesDetail/ServicesDetail';
import logo from '../../../images/service-logo/ship-svgrepo-com.svg';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const serviceData = [
    {
        id: 1,
        bg: 'https://www.hellenicshippingnews.com/wp-content/uploads/2017/08/Bunkering.jpg',
        name: 'Bunker & Lube Oil Supply',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis quas odit minima.',
        img: logo
    },
    {
        id: 2,
        bg: 'https://activebdgroup.com/wp-content/uploads/2020/10/food2-848x450-1.jpg',
        name: 'Provision Store Service',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis quas odit minima.',
        img: logo
    },
    {
        id: 3,
        bg: 'https://salehashipchandler.websites.co.in/files/297249/products/77172/engine-sto_1593395441knPi5u.jpeg',
        name: 'Engine Store Service',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis quas odit minima.',
        img: logo
    },
    {
        id: 4,
        bg: 'https://www.civitavecchiashipchandler.com/wp-content/uploads/2020/07/IMG20200714113312-min-1024x512.jpg',
        name: 'Deck Store Service',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis quas odit minima.',
        img: logo
    },
    {
        id: 5,
        bg: 'https://us.123rf.com/450wm/nomadsoul1/nomadsoul11909/nomadsoul1190900643/129967365-cart-with-office-supplies-in-stationery-store.jpg?ver=6',
        name: 'Stationery Store Service',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis quas odit minima.',
        img: logo
    },
    {
        id: 6,
        bg: 'https://sc04.alicdn.com/kf/HTB1lifSbPnD8KJjSspbq6zbEXXaL.jpg',
        name: 'Salon Store Service',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis quas odit minima.',
        img: logo
    },
    {
        id: 7,
        bg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT--e_jDikPXqYeCc3_8qaXb2N6oVoPR58lbg&usqp=CAU',
        name: 'Medicine Store Service',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis quas odit minima.',
        img: logo
    },
    {
        id: 8,
        bg: 'https://psbpapadakis.gr/wp-content/uploads/2018/06/MARINE-SPARES.jpg',
        name: 'Spare Parts (2nd Hand & New)',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis quas odit minima.',
        img: logo
    },
    {
        id: 9,
        bg: 'https://rushhydraulic.ca/wp-content/uploads/2019/03/Depositphotos_203415104_xl-2015-1200x801.jpg',
        name: 'Hydraulic Equipment',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis quas odit minima.',
        img: logo
    },
    {
        id: 10,
        bg: 'https://www.rimorchiatori.com/wp-content/uploads/2014/12/thumb-cat-tractor-tug.png',
        name: 'Boat Service',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis quas odit minima.',
        img: logo
    },
    {
        id: 11,
        bg: 'https://smhttp-ssl-50579.nexcesscdn.net/80290BE/media/media/catalog/category/3-publications-min.jpg',
        name: 'Publication Supply',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis quas odit minima.',
        img: logo
    },
    {
        id: 12,
        bg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF25tl0FnrWtBsXAbZn4kqnSYxZrkU1Kqb2A&usqp=CAU',
        name: 'Annual Inspection',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis quas odit minima.',
        img: logo
    },
    {
        id: 13,
        bg: 'http://www.ritulmaritime.com/img/shiprepair-services2.jpg',
        name: 'Repair Service',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis quas odit minima.',
        img: logo
    },
    {
        id: 14,
        bg: 'https://www.thome.com.sg/wp-content/uploads/2020/03/02.2-Waste-Garbage-Handling-Thome-Ship-Management.png',
        name: 'Garbage, Slug, etc. Removal Service',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis quas odit minima.',
        img: logo
    }
]

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const ServicesList = () => {
    const [services, setServices] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:5000/services').
        then(res => res.json())
        .then(data => setServices(data))
    }, []);

    return (
        <Carousel
            style={{ display: 'flex', justifyContent: 'center' }}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            containerClass="carousel-container"
            itemClass="carousel-item-padding-10-px"
            responsive={responsive}>
            {
                services.map(service => <ServicesDetail service={service} />)
            }
        </Carousel>
    );
};

export default ServicesList;