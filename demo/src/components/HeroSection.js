import React from 'react';
import '../App.css';
// import { Button } from './Button';
import './HeroSection.css';
import Video from './Video.mp4'


function HeroSection() {
    return (
        <>
        <div className='hero-container'> 
         
            <video autoPlay loop muted>
                <source src={Video} type='video/mp4' />
             </video>
        </div>
        </>
        
    );
}

export default HeroSection;