import React, { useState } from 'react';

const AddAdmin = () => {
    const [info, setInfo] = useState({});

    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleSubmit = () => {
        const formData = new FormData()
        console.log(info);
        formData.append('name', info.name);
        formData.append('email', info.email);

        fetch('http://localhost:5000/addAdmin', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <section className="container-fluid row d-flex justify-content-center">
            <div className="col-md-5 p-5" style={{ backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand pb-3">Add an Admin</h5>
                <form onSubmit={handleSubmit}>
                    <div className="form-group pb-3">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input onBlur={handleBlur} type="email" className="form-control" name="email" placeholder="Enter email" />
                    </div>
                    <div className="form-group pb-3">
                        <label htmlFor="exampleInputPassword1">Name</label>
                        <input onBlur={handleBlur} type="text" className="form-control" name="name" placeholder="Name" />
                    </div>
                    <button type="submit" className="btn btn-info text-white">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default AddAdmin;