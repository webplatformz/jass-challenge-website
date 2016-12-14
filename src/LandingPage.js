import React from 'react';
import './App.css';

import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import BotSection from './BotSection';

const LandingPage = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <BotSection />
    </div>
  );
};

export default LandingPage;
