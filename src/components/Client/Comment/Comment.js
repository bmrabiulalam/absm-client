import React, { useState } from 'react';

const Comment = () => {
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);

    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = () => {
        const formData = new FormData()

        formData.append('name', info.name);
        formData.append('designation', info.email);
        formData.append('company', info.email);
        formData.append('comment', info.email);
        formData.append('file', file);

        fetch('http://localhost:5000/addADoctor', {
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
            <div className="col-md-7 p-5" style={{ backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand mb-4">Add Your Comment</h5>
                <form onSubmit={handleSubmit}>
                    <div className="form-group mb-3">
                        <label htmlFor="exampleInputPassword1">Name</label>
                        <input onBlur={handleBlur} type="text" className="form-control" name="name" placeholder="Name" />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="exampleInputPassword1">Designation</label>
                        <input onBlur={handleBlur} type="text" className="form-control" name="designation" placeholder="Designation" />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="exampleInputPassword1">Company</label>
                        <input onBlur={handleBlur} type="text" className="form-control" name="company" placeholder="Company Name" />
                    </div>
                    <div className="form-group mb-3 mb-3">
                        <label htmlFor="exampleInputPassword1">Comment</label>
                        <textarea onBlur={handleBlur} class="form-control" aria-label="With textarea" name="comment" placeholder="Comment"></textarea>
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="exampleInputPassword1">Upload an image</label>
                        <input onChange={handleFileChange} type="file" className="form-control" id="exampleInputPassword1" placeholder="Picture" />
                    </div>
                    <button type="submit" className="btn btn-info text-white">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default Comment;