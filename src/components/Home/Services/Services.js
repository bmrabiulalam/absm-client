import React from 'react';
import Typewriter from 'typewriter-effect';
import ServicesAccordion from '../ServicesAccordion/ServicesAccordion';
import ServicesList from '../ServicesList/ServicesList';

const Services = () => {
    return (
        <section id="services-section" class="px-lg-5">
            <h2 class="text-center mb-5 pt-5 text-info">PRODUCTS & SERVICES</h2>
            <div class="row row-cols-1 row-cols-md-2">
                <div class="col col-md-4 px-5 text-white">
                    <div style={{ height: '120px' }}>
                        <h4>We Offer</h4>
                        <p>
                            <Typewriter
                                options={{
                                    strings: ['Cost Effectiveness, Friendly Working Environment, Reasonable Price, On time delivery, Best Quality, Comparative Price.'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </p>
                    </div>
                    <ServicesAccordion></ServicesAccordion>
                </div>
                <div class="col col-md-8">
                    <ServicesList></ServicesList>
                </div>
            </div>
        </section>
    );
};

export default Services;