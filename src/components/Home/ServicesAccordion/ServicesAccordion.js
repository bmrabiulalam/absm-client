import React from 'react';
import AccordionDetails from '../AccordionDetails/AccordionDetails';

const accordionData = [
    {
        id: 1,
        title: 'Quality Services',
        desc: 'Unique and creative solutions that meet the client’s expectations not only by realizing the client’s business objectives, but particularly by our strict adherence to the ethical principles of public relations. Continuous search for opportunities beyond the agreed communications and business objectives.'
    },
    {
        id: 2,
        title: 'We Do Things Right',
        desc: 'We endeavor to maintain an excellent track record for competent and competitive service.'
    },
    {
        id: 3,
        title: 'Supply Chain',
        desc: 'We offer second to none, round the clock services such as: Food & Beverages, Bonded warehouses, Deck & Engine Stores, spare Parts, Laundry Services and Stationary. Our Business does not stop at that, we also supply Bunker & Lub Oil with very efficient cost effective & quality services. Bunker and Lube oil supply,Provision store,Engine store,Deck store ,Stationary store,Salon store house ,Medicine store,Spare parts,Hydraulic equipment ,Boat service.'
    },
    {
        id: 4,
        title: 'Ship Support',
        desc: 'A B S M can guarantee exceptional ship support and superior ship owner\'s satisfaction based on two specific factors: well experienced staff and fully integrated operational capabilities.'
    },
    {
        id: 5,
        title: 'Stores & Warehouses',
        desc: 'Our stores & warehouses are classified as first class utilities. With our flexibility and reputation for reliability, Our customers realize who they can depend upon. Do not hesitate to ask, we have many innovative solutions to your supply requirements.'
    }
]

const bgStyle = {
    background: 'linear-gradient(100deg, rgb(253, 71, 229), #1eb9e9)'
};

const ServicesAccordion = () => {
    return (
        <div class="accordion" id="accordionExample" style={bgStyle}>
            {
                accordionData.map(data => <AccordionDetails data={data} />)
            }
        </div>
    );
};

export default ServicesAccordion;