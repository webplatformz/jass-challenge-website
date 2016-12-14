import React from 'react';

import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router';

import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavbarHeader from 'react-bootstrap/lib/NavbarHeader';
import NavbarBrand from 'react-bootstrap/lib/NavbarBrand';
import NavbarToggle from 'react-bootstrap/lib/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/lib/NavbarCollapse';

export default (props) => {
    const isTransparent = props.isTransparent;
    return (
      <Navbar fixedTop className={(isTransparent ? 'transparent' : '')}>
        <NavbarHeader>
          <NavbarBrand>
            <Link to="/">Jass-Challenge</Link>
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
