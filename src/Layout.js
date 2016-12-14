import React from 'react';
import './App.css';

import Footer from './Footer';
import AppNavbar from './AppNavbar';

const Layout = ({children}) => {
  return (
    <div>
      <AppNavbar />
      {children}
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: React.PropTypes.object
};

export default Layout;
