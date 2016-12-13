import React, { Component } from 'react';
import './App.css';

import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import BotSection from './BotSection';

class LandingPage extends Component {
  render() {
    return (
      <div>
        <HeroSection />
        <AboutSection />
        <BotSection />
      </div>
    );
  }
}

export default LandingPage;
