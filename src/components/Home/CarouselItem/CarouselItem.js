import React from 'react';

const style = {
    carouselItem: {
        height: '50vw',
        background: 'no-repeat center center scroll',
        backgroundSize: 'cover'
    },
    carouselCaption: {
        backgroundColor: 'rgba(0, 225, 255, 0.575)',
        color: 'rgb(232, 252, 250)'
    }
}

const CarouselItem = (props) => {
    const { id, img, title, desc } = props.data;
    const active = id === 1 ? 'active' : '';

    return (
        <div style={style.carouselItem} class={`carousel-item my-carousel-item `+ active}>
            <img src={img} class="d-block w-100" alt={title} />
            <div style={style.carouselCaption} class="my-carousel-caption carousel-caption d-none d-sm-block">
                <h6>{title}</h6>
                <p>{desc}</p>
            </div>
        </div>
    );
};

export default CarouselItem;