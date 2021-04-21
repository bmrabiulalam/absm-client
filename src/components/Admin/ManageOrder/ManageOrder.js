import React, { useEffect, useState } from 'react';
import OrderRow from './OrderRow';

const ManageOrder = () => {
    const [bookingOrder, setBookingOrder] = useState([]);

    useEffect(() => {
        fetch('https://abshipmanagement.herokuapp.com/bookings')
            .then(res => res.json())
            .then(data => setBookingOrder(data))
    }, [])

    return (
        <section className="container-fluid row d-flex justify-content-center">
            <div className="col-md-12 p-5" style={{ backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand pb-3">Manage Services</h5>
                <table class="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Client Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Service Name</th>
                            <th scope="col">Payment Method</th>
                            <th scope="col">Status</th>
                            <th scope="col">Change Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookingOrder.map(booking => <OrderRow order={booking} ></OrderRow>)
                        }
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default ManageOrder;