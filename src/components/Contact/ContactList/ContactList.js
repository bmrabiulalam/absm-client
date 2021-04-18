import React from 'react';
import ContactDetails from '../ContactDetails/ContactDetails';

const contactData = [
    {
        header: 'AB SHIP MANAGEMENT',
        office: 'Head office',
        ofcAddress: 'HASNA TOWER 4TH FLOOR, 1110/ B AGRABAD C/A, CHITTAGONG. BANGLADESH – 4100',
        email: 'info@abshipmanagement.com, abshipmanagement@gmail.com',
        phone: '+88 031 2515276',
        fax: '+88 031 2515276',
        mobile: '+88 01839909440'

    },
    {
        header: 'AB SHIP MANAGEMENT',
        office: 'Branch office',
        ofcAddress: 'Lucky Mansion Ground Floor, B-Nag Lane, Goshaildanga, Near Kali Bari, CHITTAGONG, BANGLADESH – 4100',
        email: 'supply@abshipmanagement.com',
        phone: '',
        fax: '',
        mobile: '+88 01839909441'

    },
    {
        header: 'AB SHIP MANAGEMENT',
        office: 'Mongla office',
        ofcAddress: 'House No: 32/5, Nahar Mansion Ground Floor, Mongla Port Connecting Road, Mongla, Bhagerhat, BANGLADESH – 4100',
        email: 'ops@abshipmanagement.com',
        phone: '',
        fax: '',
        mobile: '+88 01839909442'

    },
]

const ContactList = () => {
    return (
        <section id="contact-section" class="px-lg-5 mt-5 pt-5">
            <h2 class="text-center text-info mt-3">OUR OFFICES</h2>
            <p class="text-center px-3 my-4 text-white">To find out more about A B Ship Management and our services, please contact us.</p>
            <div class="card-group d-flex flex-wrap justify-content-center justify-content-md-evenly my-5 text-light">
                {
                    contactData.map(contact => <ContactDetails contact={contact} ></ContactDetails>)
                }
            </div>
        </section>
    );
};

export default ContactList;