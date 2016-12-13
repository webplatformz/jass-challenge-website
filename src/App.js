import React, { Component } from 'react';
import './App.css';

import Footer from './Footer';
import AppNavigation from './AppNavigation';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import BotSection from './BotSection';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavigation />
        <HeroSection />
        <AboutSection />
        <BotSection />
        <Footer />
      </div>
    );
  }
}

export default App;
