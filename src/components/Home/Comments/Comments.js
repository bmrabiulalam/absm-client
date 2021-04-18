import React from 'react';
import CommentDetails from '../CommentDetails/CommentDetails.js';
import img1 from '../../../images/man11s.jpg';
import img2 from '../../../images/man22s.jpg';
import img3 from '../../../images/man33s.jpg';

const commentsData = [
    {
        id: 1, 
        img: img1, 
        name: 'John Doe', 
        designation: 'CEO', 
        company: 'XYZ Shipping Line', 
        comment: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta vitae reiciendis, eveniet voluptatum autem aliquid nam ex illo numquam eos officia, impedit doloribus possimus nisi maxime optio ratione.'
    },
    {
        id: 2, 
        img: img2, 
        name: 'Mike Berry', 
        designation: 'MD', 
        company: 'Some Ship Management Company Ltd', 
        comment: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta vitae reiciendis, eveniet voluptatum autem aliquid nam ex illo numquam eos officia, impedit doloribus possimus nisi maxime optio ratione.'
    },
    {
        id: 3, 
        img: img3, 
        name: 'John Smith', 
        designation: 'Chairman', 
        company: 'Double Shipping Line', 
        comment: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta vitae reiciendis, eveniet voluptatum autem aliquid nam ex illo numquam eos officia, impedit doloribus possimus nisi maxime optio ratione.'
    }
]

const Comments = () => {
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
                                commentsData.map(comment => <CommentDetails comment={comment} />)
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