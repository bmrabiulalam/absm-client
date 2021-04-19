import React from 'react';

const ManageOrder = () => {
    // const {id, name, icon} = service;
    const id = 12;
    const handleDelete = id => { }

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
                            <th scope="col">Manage</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>otto@mail.com</td>
                            <td>Medicine Store Service</td>
                            <td>Stripe</td>
                            <td>
                                <div class="input-group">
                                    <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Status</button>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Done</a></li>
                                        <li><a class="dropdown-item" href="#">On Going</a></li>
                                        <li><a class="dropdown-item" href="#">Pending</a></li>
                                    </ul>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Mark</td>
                            <td>otto@mail.com</td>
                            <td>Medicine Store Service</td>
                            <td>Stripe</td>
                            <td>
                                <div class="input-group">
                                    <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Status</button>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Done</a></li>
                                        <li><a class="dropdown-item" href="#">On Going</a></li>
                                        <li><a class="dropdown-item" href="#">Pending</a></li>
                                    </ul>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Mark</td>
                            <td>otto@mail.com</td>
                            <td>Medicine Store Service</td>
                            <td>Stripe</td>
                            <td>
                                <div class="input-group">
                                    <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Status</button>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Done</a></li>
                                        <li><a class="dropdown-item" href="#">On Going</a></li>
                                        <li><a class="dropdown-item" href="#">Pending</a></li>
                                    </ul>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default ManageOrder;