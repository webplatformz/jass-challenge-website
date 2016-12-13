import React, { Component } from 'react';

import { LinkContainer } from 'react-router-bootstrap';

import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavbarHeader from 'react-bootstrap/lib/NavbarHeader';
import NavbarBrand from 'react-bootstrap/lib/NavbarBrand';
import NavbarToggle from 'react-bootstrap/lib/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/lib/NavbarCollapse';

class AppNavigation extends Component {

  constructor(props) {
    super(props);
    this.state = {transparent: true};
  }

  handleScroll = () => {
      const offset = 50;
      const windowScrollTop = window.pageYOffset;
      if (windowScrollTop <= offset) {
        this.setState({transparent: true});
      } else {
        this.setState({transparent: false});
      }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    const transparent = this.state.transparent;
    return (
      <Navbar fixedTop className={(transparent ? 'transparent' : '')} ref={"navbar"}>
        <NavbarHeader>
          <NavbarBrand>
            <a href="#">Jass-Challenge</a>
          </NavbarBrand>
          <NavbarToggle />
        </NavbarHeader>
        <NavbarCollapse>
          <Nav pullRight>
            <NavItem>About</NavItem>
            <LinkContainer to="/signup">
              <NavItem>Sign Up</NavItem>
            </LinkContainer>
            <LinkContainer to="/login">
              <NavItem>Log In</NavItem>
            </LinkContainer>
          </Nav>
        </NavbarCollapse>
      </Navbar>
    );
  }
}

export default AppNavigation;
