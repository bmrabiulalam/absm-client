import React from 'react';

const btnStyle = {
    background: 'linear-gradient(130deg, #549bb1, rgb(99, 208, 252))',
    borderRadius: '5px !important'
}

const AccordionDetails = ({data}) => {
    return (
        <div class="accordion-item bg-transparent">
            <h2 class="accordion-header" id={'heading' + data.id}>
                <button style={btnStyle} class="accordion-button collapsed text-white" type="button" data-bs-toggle="collapse" data-bs-target={'#collapse' + data.id} aria-expanded="false" aria-controls={'collapse' + data.id}>
                    {data.title}
                </button>
            </h2>
            <div id={'collapse' + data.id} class="accordion-collapse collapse" aria-labelledby={'heading' + data.id} data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    {data.desc}
                </div>
            </div>
        </div>
    );
};

export default AccordionDetails;