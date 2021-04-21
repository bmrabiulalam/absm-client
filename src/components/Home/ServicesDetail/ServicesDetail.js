import React from 'react';
import { useHistory } from "react-router-dom";
import './ServicesDetail.css';

const ServicesDetail = ({service}) => {
    const {_id, name, desc, bgImage, iconImg} = service;
    const history = useHistory();

    const handleBooking = e => {
        e.preventDefault();
        history.push('/service/book/'+_id);
    }

    const bgStyle = {
        backgroundImage: `url("${bgImage}")`, 
        width: '250px', 
        backgroundSize: 'cover', 
        height: '320px'
    }

    return (
        <div className='m-1 service' style={bgStyle}>
            <div style={{display: 'flex', flexDirection: 'column', backgroundColor: '#22d4f8b6', height: '100%', padding: '20px', color: '#fff'}}>
                <img style={{width: '70px', alignSelf: 'center', marginBottom: '10px'}} src={`data:${iconImg.contentType};base64,${iconImg.img}`} alt=""/>
                <h4>{name}</h4>
                <p>{desc}</p>
                <button className="btn btn-warning text-white" onClick={handleBooking}>Book Service</button>
            </div>
        </div>
    );
};

export default ServicesDetail;