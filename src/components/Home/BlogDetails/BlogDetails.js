import React from 'react';

const BlogDetails = (props) => {
    const {title, desc, img} = props.blog;

    return (
        <div class="card" style={{width: '25rem', marginBlock: '1rem'}}>
            <img src={img} class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">{title}</h5>
                <p class="card-text">{desc}</p>
                <a href="#" class="btn btn-outline-info">Read More...</a>
            </div>
        </div>
    );
};

export default BlogDetails;

