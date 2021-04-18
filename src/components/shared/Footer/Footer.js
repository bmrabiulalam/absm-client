import React from 'react';
import './Footer.css';
import FooterCol from '../FooterCol/FooterCol';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import logo from '../../../images/fav-icon.png';

const Footer = () => {
    const about = [
        {name: "About Us" , link: "/about"},
        {name: "Our Values" , link: "/values"},
        {name: "Leadership" , link: "/leadership"},
        {name: "Corporate Responsibility" , link: "/responsibility"},
        {name: "Sustainability" , link: "/sustainability"},
        {name: "Awards" , link: "/awards"}
    ]
    const ourAddress = [
        {name: 'Head Office', link: "https://www.google.com/map"},
        {name: "Branch Office" , link: "https://www.google.com/map"},
        {name: "Mongla Office" , link: "https://www.google.com/map"},
    ]
    const services = [
        {name: "Bunker & Lub Oil Supply" , link: "/oil-supply"},
        {name: "Provision Store Service" , link: "/provision-store"},
        {name: "Engine Store Service" , link: "/engine-store"},
        {name: "Deck Store Service" , link: "/dock-store"},
        {name: "Stationery Store Service" , link: "/stationary-store"},
        {name: "Salon Store Service" , link: "/salon-store"},
        {name: "Medicine Store Service" , link: "/medicine-store"},
        {name: "Spare Parts (2nd Hand & New)" , link: "/spare-parts"},
        {name: "Hydraulic Equipment" , link: "/hydraulics"},
        {name: "Boat Service" , link: "/boat-services"},
        {name: "Publication Supply" , link: "/publication-supply"},
        {name: "Annual Inspection" , link: "/annual-inspection"},
        {name: "Repair Service" , link: "/repair-service"},
        {name: "Garbage, Slug, etc. Removal Service" , link: "/garbage-removal"}
    ]
    return (
        <footer className="footer-area clear-both">
            <div className="container pt-5 pb-2">
                <div className="row py-5 d-flex justify-content-around" style={{color: '#eee'}}>
                    <FooterCol key={1} menuTitle={""} menuItems={[]}>
                        <img src={logo} alt="AB Ship Management"/>
                    </FooterCol>
                    <FooterCol key={1} menuTitle={"About"} menuItems={about}/>
                    <FooterCol key={2} menuTitle="Services" menuItems={services}/>
                    <FooterCol key={4} menuTitle="Contact" menuItems={ourAddress}> 
                        <p>HASNA TOWER” 4TH FLOOR</p>
                        <p>1110/B AGRABAD C/A, CHITTAGONG,</p>
                        <p>BANGLADESH – 4100</p>
                        <ul className="mt-4 social-media list-inline">
                            <li className="list-inline-item"><a href="https://www.facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="https://www.google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="https://www.instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="mt-5">
                            <h6>Call now</h6>
                            <button className="btn btn-brand">+2025550295</button>
                        </div>
                    </FooterCol>
                </div>
                <div className="copyRight text-center">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>
        
    );
};

export default Footer;