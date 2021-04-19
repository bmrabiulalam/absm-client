import React, { useEffect, useState } from 'react';
import CommentDetails from '../CommentDetails/CommentDetails.js';

const Comments = () => {
    const [comments, setComments] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:5000/comments').
        then(res => res.json())
        .then(data => setComments(data))
    }, []);

    console.log(comments)

    return (
        <section id="client-comments" class="container my-5 py-5 px-md-5">
            <div class="row row-cols-1 row-cols-md-2 align-items-center">
                <div class="col col-md-5 d-flex justify-content-md-start justify-content-center align-items-center">
                    <h2 class="mb-5 me-md-3 text-info fs-3">What Our Clients Say</h2>
                </div>
                <div class="col comments">
                    <div id="carouselExampleFade" class="carousel slide carousel-slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            {
                                comments?.length > 0
                                ?
                                comments.map((comment, index) => <CommentDetails index={index} comment={comment} />)
                                :
                                <div class="text-center my-2 py-2 text-info">
                                    <div class="spinner-border" role="status">
                                        <span class="visually-hidden">Loading...</span>
                                    </div>
                                </div>
                            }
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade"  data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade"  data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Comments;