import React from 'react';

const ContactDetails = (props) => {
    const {header, office, ofcAddress, email, phone, fax, mobile} = props.contact;

    return (
        <div class="card bg-info mb-3 w-100" style={{maxWidth: '18rem', minWidth: '18rem'}}>
            <div class="card-header">{header}</div>
            <div class="card-body">
                <h5 class="card-title">{office}</h5>
                <p class="card-text">{ofcAddress}</p>
                <p class="card-text">E-mail: {email}</p>
                <p class="card-text">Mobile: {mobile}</p>
                <p class="card-text">Tel: {phone}</p>
                <p class="card-text">Fax: {fax}</p>
            </div>
        </div>
    );
};

export default ContactDetails;