import React from 'react';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Achievements from '../components/Achievements/Achievements';
import Technologies from '../components/Technologies/Technologies';
import CodingPlatforms from '../components/CodingPlatforms/CodingPlatforms';
import Projects from '../components/Projects/Projects';
import Footer from '../components/Footer/Footer';
import EducationExperienceSection from '../components/Education&Experience/EducationExperienceSection';

const Home = () => {
  // Mock data for components
  
  return (
    <div className="app">
      <Header />
      
      <main>
        <Hero />
        <EducationExperienceSection />
        <Achievements/>
        <Technologies  />
        <CodingPlatforms />
        <Projects/>
      </main>
      <Footer />
    </div>
  );
};

export default Home;