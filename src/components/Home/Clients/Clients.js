import React from 'react';
import bg from '../../../images/ship6.jpg';

const clientStyle = {
    clientsSection: {
        backgroundImage: 'url('+bg+')',
        backgroundSize: 'cover',
        minHeight: '400px'
      },
      clientInnerDiv: {
        backgroundColor: '#22d4f8b6',
        height: '400px'
      },
      clientBtn: {
        margin: '.5em',
        paddingBlock: '1.5em',
        fontWeight: '600'
      }
}

const Clients = () => {
    return (
        <section id="clients-section" class="my-5" style={clientStyle.clientsSection}>
      <div class="px-lg-5" style={clientStyle.clientInnerDiv}>
        <h2 class="d-flex justify-content-center py-5 text-light">KEY CLIENTS</h2>
        <div class="d-flex flex-wrap justify-content-center">
          <a target="_blank" 
             href="https://www.sgpbusiness.com/company/Mingda-Shipping-Pte-Ltd" 
             type="button" 
             class="btn btn-outline-warning text-light" 
             style={clientStyle.clientBtn}
           >
                 Mingda Shipping (Singapore)
           </a>
          <a target="_blank" 
             href="https://world-ships.com/company/f86e57f1598219e53f4e1d0c756bd90f" 
             type="button" 
             class="btn btn-outline-warning text-light" 
             style={clientStyle.clientBtn}
           >
                 Now Arrival (HK)
           </a>
          <a target="_blank" 
             href="https://www.pacific-logistics.com/" 
             type="button" 
             class="btn btn-outline-warning text-light" 
             style={clientStyle.clientBtn}
           >
                PLC Shipping (HK)
           </a>
          <a target="_blank" 
             href="https://vgrouplimited.com/our-brands/v-ships" 
             type="button" 
             class="btn btn-outline-warning text-light" 
             style={clientStyle.clientBtn}
           >
                V Ship Asia
           </a>
          <a target="_blank" 
             href="https://vgrouplimited.com/ship-management" 
             type="button" 
             class="btn btn-outline-warning text-light" 
             style={clientStyle.clientBtn}
           >
                V Ship Manila Branch
           </a>
          <a target="_blank" 
             href="http://maritime-connector.com//company/seaflag-shipmanagement/2697/" 
             type="button" 
             class="btn btn-outline-warning text-light" 
             style={clientStyle.clientBtn}
           >
                Sea flag Ship Management (Italy)
           </a>
        </div>
        </div>
    </section>
    );
};

export default Clients;