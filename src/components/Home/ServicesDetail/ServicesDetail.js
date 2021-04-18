import React from 'react';
import './ServicesDetail.css';

const ServicesDetail = ({service}) => {
    const {bg, img, name, desc} = service;

    const bgStyle = {
        backgroundImage: "url("+bg+")", 
        width: '250px', 
        backgroundSize: 'cover', 
        height: '320px'
    }

    return (
        <div className='m-1 service' style={bgStyle}>
            <div style={{display: 'flex', flexDirection: 'column', backgroundColor: '#22d4f8b6', height: '100%', padding: '20px', color: '#fff'}}>
                <img style={{width: '70px', alignSelf: 'center', marginBottom: '10px'}} src={img} alt=""/>
                <h4>{name}</h4>
                <p>{desc}</p>
                <button className="btn btn-warning text-white">Book Service</button>
            </div>
        </div>
    );
};

export default ServicesDetail;