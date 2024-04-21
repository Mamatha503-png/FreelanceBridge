import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import Footer from '../Footer';
import ContactSection from '../ContactSection';

function Home(){
    return(
        <>
        <HeroSection/>
        <Cards/>
        <ContactSection/>
        <Footer/>
        </>
    )
}
export default Home;