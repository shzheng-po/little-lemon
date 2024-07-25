import React from 'react';
import marioAndAdrianASrc from '../images/Mario_and_Adrian_A.jpg';
import Nav from './Nav';

function Footer() {
    return (
    <footer>
        <div className="footer-picture">
            <img src={marioAndAdrianASrc}
                alt="Photo" style={{height: "279px"}}/>
        </div>
        <div className='details'>
            <div className="doormat-navigation">
                <h3>Doormat Navigation</h3>
                <Nav />
            </div>
            <div className='contact'>
                <h3>Contact</h3>
                <p>Address</p>
                <p>Phone Number</p>
                <p>Email</p>
            </div>
            <div className="social-media">
                <h3>Social Media Links</h3>
                <ul>
                    <li><a href="https://www.facebook.com/">Facebook</a></li>
                    <li><a href="https://www.instagram.com/">Instagram</a></li>
                    <li><a href="https://www.twitter.com/">Twitter</a></li>
                </ul>
            </div>
        </div>
    </footer>
    );
}

export default Footer;