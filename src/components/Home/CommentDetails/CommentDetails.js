import React from 'react';
import './CommentDetails.css';

const CommentDetails = (props) => {
    const {img, name, designation, company, comment} = props.comment;
    const active = props.index === 0 ? 'active' : '';

    return (
        <div class={`carousel-item ${active}`}>
            <div class="card single-comment">
                <div class="commenter-pic d-flex justify-content-center">
                    <img src={`data:${img.contentType};base64,${img.image}`} alt="" />
                </div>
                <div class="comment-quote px-3">
                    <p><q>{comment}</q></p>
                    <p> &mdash; {name}, <cite>{designation}, {company}</cite></p>
                </div>
            </div>
        </div>
    );
};

export default CommentDetails;