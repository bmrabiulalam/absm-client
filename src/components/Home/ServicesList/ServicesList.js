import React, { useEffect, useState } from 'react';
import ServicesDetail from '../ServicesDetail/ServicesDetail';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

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
        fetch('https://abshipmanagement.herokuapp.com/services').
        then(res => res.json())
        .then(data => setServices(data))
    }, []);

    return (
        <>
            {
                services?.length > 0
                ?
                <Carousel
                    style={{ display: 'flex', justifyContent: 'center' }}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={3000}
                    containerClass="carousel-container"
                    itemClass="carousel-item-padding-10-px"
                    responsive={responsive}>
                    {
                        services.map(service => <ServicesDetail key={service._id} service={service} />)
                    }
                </Carousel>
                :
                <div class="text-center my-5 py-5 text-info">
                    <div class="spinner-border" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
            }
        </>
    );
};

export default ServicesList;