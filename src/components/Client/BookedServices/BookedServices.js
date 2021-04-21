import React, { useEffect, useState, useContext } from 'react';
import { UserContext } from '../../../App';

const BookedServices = () => {
    const [loggedInUser, ] = useContext(UserContext);
    const [bookingData, setBookingData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/bookingsByClient/'+loggedInUser.email)
            .then(res => res.json())
            .then(data => setBookingData(data))
    }, [])

    return (
        <div className="d-flex justify-content-evenly">
            {
                bookingData.map(booking => {
                    console.log(booking)
                    const {service, status} = booking;
                    let statusClasses = '';
                    let cardClasses = 'card m-2 ';

                    if (booking.status === 'Done') {
                        statusClasses = 'bg-success text-white px-4 py-2 rounded-3';
                        cardClasses += 'border-success';
                    }
                    else if (booking.status === 'Pending') {
                        statusClasses = 'bg-danger text-white px-4 py-2 rounded-3';
                        cardClasses += 'border-danger';
                    }
                    else {
                        statusClasses = 'bg-warning text-white px-4 py-2 rounded-3';
                        cardClasses += 'border-warning';
                    }

                    return (
                        <div class={cardClasses} style={{ maxWidth: '20rem' }}>
                            <div class="card-header d-flex justify-content-between">
                                <p><img style={{height: '30px'}} src={`data:${service?.iconImg?.contentType};base64,${service?.iconImg?.img}`} alt="" /></p>
                                <p className={statusClasses}>{status}</p>
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">{service?.name}</h5>
                                <p class="card-text">{service?.desc}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default BookedServices;