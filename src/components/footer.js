import React, {ReactDOM} from 'react';
import '../styles/footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className="footer-wrapper">
        <div className="footer">
            <div className="footer-column">
                <a href="/"><h3>Furgo</h3></a>
                <ul>
                    <li><a href="">About</a></li>
                    <li><a href="">Team</a></li>
                    <li><a href="">Policy</a></li>
                    <li><a href="">Insurance</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </div>
            <div className="footer-column">
                <h3>Hosting</h3>
                <ul>
                    <li><a href="/list-your-car">List your car</a></li>
                    <li><a href="">Premium hosts</a></li>
                    <li><a href="">Insurance & protection</a></li>
                    <li><a href="">Host tools</a></li>
                    <li><a href="">FAQs</a></li>
                </ul>
            </div>
            <div className="footer-column">
                <h3>Vehicle types</h3>
                <ul>
                    <li><a href="">Cars</a></li>
                    <li><a href="">Exotic & luxury</a></li>
                    <li><a href="">Sport</a></li>
                    <li><a href="">Vans</a></li>
                    <li><a href="">Truck</a></li>
                </ul>
            </div>
            <div className="footer-column">
                <h3>Explore</h3>
                <ul>
                    <li><a href="">Book a car</a></li>
                    <li><a href="">Weddings</a></li>
                    <li><a href="">Trust & safety</a></li>
                    <li><a href="">FAQs</a></li>
                    <li><a href="">Get help</a></li>
                </ul>
            </div>
            
        </div>
        <div className="socials">
            <a href=""><FontAwesomeIcon size="2x" icon={faFacebook} /></a>
            <a href=""><FontAwesomeIcon size="2x" icon={faInstagram} /></a>
            <a href=""><FontAwesomeIcon size="2x" icon={faYoutube} /></a>
            <a href=""><FontAwesomeIcon size="2x" icon={faTwitter} /></a>
             
        </div>
        <p> &copy;2022 Furgo</p>
    </div>
  )
}

export default Footer;