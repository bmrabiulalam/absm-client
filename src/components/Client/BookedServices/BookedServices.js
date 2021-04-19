import React from 'react';

const bookingData = [
    {
        icon: '',
        status: 'Done',
        title: 'Info card title',
        desc: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
    },
    {
        icon: '',
        status: 'Pending',
        title: 'Info card title',
        desc: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
    },
    {
        icon: '',
        status: 'On Goning',
        title: 'Info card title',
        desc: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
    },
]

const BookedServices = () => {
    return (
        <div className="d-flex justify-content-evenly">
            {
                bookingData.map(data => {
                    let statusClasses = '';
                    let cardClasses = 'card m-2 ';
                    
                    if(data.status === 'Done'){
                        statusClasses = 'bg-success text-white px-4 py-2 rounded-3';
                        cardClasses+='border-success';
                    }
                    else if(data.status === 'Pending'){
                        statusClasses = 'bg-danger text-white px-4 py-2 rounded-3';
                        cardClasses+='border-danger';
                    }
                    else {
                        statusClasses = 'bg-warning text-white px-4 py-2 rounded-3';
                        cardClasses+='border-warning';
                    }

                    return (
                        <div class={cardClasses} style={{maxWidth: '20rem'}}>
                            <div class="card-header d-flex justify-content-between">
                                <p>icon</p>
                                <p className={statusClasses}>{data.status}</p>
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">{data.title}</h5>
                                <p class="card-text">{data.desc}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default BookedServices;