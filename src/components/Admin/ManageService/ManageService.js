import React, { useEffect, useState } from 'react';
import './ManageService.css';

const ManageService = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services').
            then(res => res.json())
            .then(data => setServices(data))
    }, []);

    const handleDelete = id => {
        fetch('http://localhost:5000/deleteService/' + id, {
            method: 'DELETE'
        })
            .then(res => {
                const servicesAfterDeletion = services.filter(service => service._id !== id);
                setServices(servicesAfterDeletion);
                alert('Service Deleted Successfully!')
            })
    }

    return (
        <section className="container-fluid row d-flex justify-content-center">
            <div className="col-md-12 p-5" style={{ backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand pb-3">Manage Services</h5>

                {
                    services?.length > 0
                        ?
                        <table class="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Service ID</th>
                                    <th scope="col">Icon</th>
                                    <th scope="col">Service Name</th>
                                    <th scope="col">Manage</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    services.map((service, index) => {
                                        const { _id, name, iconImg } = service;
                                        console.log(service)

                                        return (
                                            <tr>
                                                <th scope="row">{index + 1}</th>
                                                <td>{_id}</td>
                                                <td><img style={{ width: '30px' }} src={`data:${iconImg.contentType};base64,${iconImg.img}`} alt="" /></td>
                                                <td>{name}</td>
                                                <td className='text-center'>
                                                    <svg onClick={() => handleDelete(_id)} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill text-danger deleteBtn" viewBox="0 0 16 16">
                                                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                                                    </svg>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                        :
                        <div class="text-center my-5 py-5 text-info">
                            <div class="spinner-border" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                        </div>
                }
            </div>
        </section>
    );
};

export default ManageService;