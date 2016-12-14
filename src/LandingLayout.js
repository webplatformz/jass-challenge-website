import React, { Component } from 'react';
import './App.css';

import Footer from './Footer';
import AppNavbar from './AppNavbar';

class LandingLayout extends Component {

  constructor(props) {
    super(props);
    this.state = { isNavbarTransparent: true };
  }

  handleScroll = () => {
      const offset = 50;
      const windowScrollTop = window.pageYOffset;
      if (windowScrollTop <= offset) {
        this.setState({ isNavbarTransparent: true });
      } else {
        this.setState({ isNavbarTransparent: false });
      }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    const isNavbarTransparent = this.state.isNavbarTransparent;
    return (
      <div>
        <AppNavbar isTransparent={isNavbarTransparent}/>
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default LandingLayout;
