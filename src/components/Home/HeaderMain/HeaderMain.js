import React from 'react';
import carouselImg1 from '../../../images/ship1.png';
import carouselImg2 from '../../../images/ship2.jpg';
import carouselImg3 from '../../../images/ship3.jpg';
import CarouselItem from '../CarouselItem/CarouselItem';

const carouselData = [
    {
        id: 1,
        img: carouselImg1,
        title: 'WELCOME',
        desc: 'A B S M can guarantee exceptional ship support and superior ship owner\'s satisfaction.'
    },
    {
        id: 2,
        img: carouselImg2,
        title: 'EXCEPTIONAL SERVICES',
        desc: 'We offer second to none, very efficient, cost effective & round the clock quality services.'
    },
    {
        id: 3,
        img: carouselImg3,
        title: 'ABOUT US',
        desc: 'A B SHIP MANAGEMENT is one of the premier general ship supplying companies located in Bangladesh. The company was established in 2006 at the port of Chittagong & Mongla with Chittagong OPL in Bangladesh.'
    }
]

const HeaderMain = () => {
    return (
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                {
                    carouselData.map(data => <CarouselItem key={data.id} data={data} />)
                }
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default HeaderMain;