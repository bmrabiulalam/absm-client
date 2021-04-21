import React, { useState } from 'react';

const Comment = () => {
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);
    const [uploading, setUploading] = useState(false);

    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = e => {
        e.preventDefault();
        const formData = new FormData();
        setUploading(true);

        formData.append('name', info.name);
        formData.append('designation', info.designation);
        formData.append('company', info.company);
        formData.append('comment', info.comment);
        formData.append('image', file);

        fetch('https://abshipmanagement.herokuapp.com/addComment', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                handleReset()
                setUploading(false);
                alert('Your Comment Added Successfully!')
            })
            .catch(error => {
                console.error(error)
            })
    }

    const handleReset = () => {
        // Select all the input elements on the page and reset
        Array.from(document.querySelectorAll("input")).forEach(
            input => (input.value = "")
        );

        Array.from(document.querySelectorAll("textarea")).forEach(
            textarea => (textarea.value = "")
        );

        setInfo({});
    };

    return (
        <section className="container-fluid row d-flex justify-content-center">
            <div className="col-md-7 p-5" style={{ backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand mb-4">Add Your Comment</h5>
                <form onSubmit={e => handleSubmit(e)}>
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
                    <div className="d-flex justify-content-start">
                        <button type="submit" className="btn btn-info text-white">Submit</button>

                        {
                            uploading &&
                            <div class="ms-3 text-info">
                                <div class="spinner-border" role="status">
                                    <span class="visually-hidden">Loading...</span>
                                </div>
                            </div>
                        }
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Comment;