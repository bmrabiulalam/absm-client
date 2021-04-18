import React from 'react';
import BlogDetails from '../BlogDetails/BlogDetails';
import bg from '../../../images/ship1.png';

const blogData = [
    {
        title: 'World Water Day 2021',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis quas odit minima!',
        img: 'https://www.synergymarinegroup.com/static/water-day-cbd01c7f08c0a062f34e06afb7c67bd3.jpg'
    },
    {
        title: 'SIRE, remotely',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis quas odit minima!',
        img: 'https://www.synergymarinegroup.com/static/sire-84a0fb6cd32ed277af7ec56d7f1c6f25.jpg'
    },
    {
        title: 'Managing the transition to Low-Sulphur fuel – not always smooth sailing?',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis quas odit minima!',
        img: 'https://www.synergymarinegroup.com/static/sulphur-f9b31efda4d2f0247cc80f66b12088c1.jpg'
    },
]

const Blog = () => {
    return (
        <div style={{backgroundImage: 'url('+bg+')', backgroundSize: 'cover'}}>
            <div style={{backgroundColor: '#22d4f8b6'}}>
            <h2 class="text-center mb-5 pt-5 text-white">OUR BLOG</h2>
            <div className="d-flex flex-wrap justify-content-around">
                {
                    blogData.map(blog => <BlogDetails blog={blog} ></BlogDetails>)
                }
            </div>
        </div>
        </div>
    );
};

export default Blog;