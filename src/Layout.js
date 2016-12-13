import React, { Component } from 'react';
import './App.css';

import Footer from './Footer';
import AppNavigation from './AppNavigation';

class Layout extends Component {
  render() {
    return (
      <div>
        <AppNavigation />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default Layout;
