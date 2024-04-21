import React from 'react';
// import { Button } from './Button';
import './Footer.css'
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer-container'>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to='/'>How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Services</Link>
                     </div>
                     <div className='footer-link-items'>
                        <h2>Contact Us</h2>
                        <Link to='/'>Contact</Link>
                        <Link to='/'>Support</Link>
                        <Link to='/'>Destinations</Link>
                        <Link to='/'>Sponsorships</Link>
                     </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>Videos</h2>
                        <Link to='/'>Sumbit Videos</Link>
                        <Link to='/'>Ambassadors</Link>
                        <Link to='/'>Agency</Link>
                        <Link to='/'>Influencer</Link>
                     </div>
                     <div className='footer-link-items'>
                        <h2 style={{width:"max-content"}}>Social media</h2>
                        <Link to='/'>Instagram</Link>
                        <Link to='/'>Facebook</Link>
                        <Link to='/'>Youtube</Link>
                        <Link to='/'>Twitter</Link>
                     </div>
                </div>
            </div>
        </div>
    );
}

export default Footer