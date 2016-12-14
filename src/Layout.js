import React, { Component } from 'react';
import './App.css';

import Footer from './Footer';
import AppNavbar from './AppNavbar';

class Layout extends Component {
  render() {
    return (
      <div>
        <AppNavbar />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default Layout;
