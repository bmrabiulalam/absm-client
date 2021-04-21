import React, { useState } from 'react';

const OrderRow = ({ order, index }) => {
    const { _id, paymentMethod, status, user, service } = order;
    const [currentStatus, setCurrentStatus] = useState(status);

    const handleSelect = e => {
        const updatedStatus = e.target.value;

        fetch('https://abshipmanagement.herokuapp.com/update/'+_id, {
            method: 'PATCH',
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({ updatedStatus })
        })
            .then(res => res.json())
            .then(data => {
                data && setCurrentStatus(updatedStatus)
            })
    }

    let statusBgColor = '';

    if (currentStatus === 'Done') {
        statusBgColor = 'text-center text-success border-success';
    }
    else if (currentStatus === 'Pending') {
        statusBgColor = 'text-center text-danger border-danger';
    }
    else {
        statusBgColor = 'text-center text-warning border-warning';
    }

    return (
        <tr style={{fontSize: '.8rem'}}>
            <th scope="row">{index + 1}</th>
            <td>{user?.name}</td>
            <td>{user?.email}</td>
            <td>{service?.name}</td>
            <td style={{textAlign: 'center'}}>Stripe</td>
            <td><p style={{ border: '2px solid', borderRadius: '12px', fontSize: '.7rem', fontWeight: 700 }} className={`px-1 py-2 ${statusBgColor}`}>{currentStatus}</p></td>
            <td>
                <select style={{fontSize: '.7rem'}} class="form-control" onChange={handleSelect}>
                    <option class="dropdown-item">Change Status</option>
                    <option class="dropdown-item">Done</option>
                    <option class="dropdown-item">On Going</option>
                    <option class="dropdown-item">Pending</option>
                </select>
            </td>
        </tr>
    )
};

export default OrderRow;