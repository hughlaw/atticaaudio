import React from 'react';
import PropTypes from 'prop-types';

import Header from './header';
import '../scss/App.scss';

const Layout = ({ siteTitle, headerImage, children }) => {
  return (
    <>
      <Header siteTitle={siteTitle} headerImage={headerImage} />
      <main>{children}</main>
      <footer>© {new Date().getFullYear()} Attica Audio</footer>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
