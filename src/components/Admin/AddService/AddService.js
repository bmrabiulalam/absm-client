import React, { useState } from 'react';

const AddService = () => {
    const [info, setInfo] = useState({});
    
    const setData = (field, data) => {
        const newInfo = { ...info };
        newInfo[field] = data;
        console.log(newInfo)
        setInfo(newInfo);
        console.log(info)
    }

    const handleBlur = e => {
        const field = e.target.name;
        const data = e.target.value;
        setData(field, data);
    }

    const handleFileChange = (e) => {
        const field = e.target.name;
        const data = e.target.files[0];
        setData(field, data);
    }

    const handleSubmit = e => {
        e.preventDefault();
        const formData = new FormData()
        formData.append('bgImage', info.bgImage);
        formData.append('icon', info.icon);
        formData.append('name', info.name);
        formData.append('desc', info.desc);

        fetch('http://localhost:5000/addService', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                alert('New Service Added Successfully!')
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <section className="container-fluid row d-flex justify-content-center">
            <div className="col-md-7 p-5" style={{ backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand pb-3">Add a Service</h5>
                <form onSubmit={e => handleSubmit(e)}>
                    <div className="form-group mb-3">
                        <label htmlFor="exampleInputEmail1">Service Name</label>
                        <input onBlur={handleBlur} type="text" className="form-control" name="name" placeholder="Enter Service Name" />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="exampleInputPassword1">Description</label>
                        <textarea onBlur={handleBlur} class="form-control" aria-label="With textarea" name="desc" placeholder="Description"></textarea>
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="exampleInputPassword1">Upload a background image</label>
                        <input onChange={handleFileChange} type="file" className="form-control" name='bgImage' id="exampleInputPassword1" placeholder="Picture" />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="exampleInputPassword1">Upload an icon</label>
                        <input onChange={handleFileChange} type="file" className="form-control" name='icon' id="exampleInputPassword1" placeholder="Picture" />
                    </div>
                    <button type="submit" className="btn btn-info text-white">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default AddService;