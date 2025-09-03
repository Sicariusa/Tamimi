import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import BusinessDivisions from '../components/BusinessDivisions';
import TamimiMarkets from '../components/TamimiMarkets';
import Partnerships from '../components/Partnerships';
import CSR from '../components/CSR';
import News from '../components/News';
import Contact from '../components/Contact';

const HomePage = () => {
    return (
        <div>
            <Hero />
            <About />
            <BusinessDivisions />
            <TamimiMarkets />
            <Partnerships />
            <CSR />
            <News />
            <Contact />
        </div>
    );
};

export default HomePage;
