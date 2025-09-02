import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import BusinessDivisions from './components/BusinessDivisions';
import TamimiMarkets from './components/TamimiMarkets';
import Partnerships from './components/Partnerships';
import CSR from './components/CSR';
import Careers from './components/Careers';
import News from './components/News';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <BusinessDivisions />
      <TamimiMarkets />
      <Partnerships />
      <CSR />
      <Careers />
      <News />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;