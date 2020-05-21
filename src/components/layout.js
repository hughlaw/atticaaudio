/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './header';
import '../scss/App.scss';

const Layout = ({ headerImage, children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      sanityHomepage {
        splashImage {
          asset {
            fluid(maxWidth: 1200) {
              src
            }
          }
        }
      }
    }
  `);

  return (
    <>
      <Header
        siteTitle={data.site.siteMetadata.title}
        headerImage={data.sanityHomepage.splashImage.asset.fluid.src}
      />
      <main>{children}</main>
      <footer>© {new Date().getFullYear()} Attica Audio</footer>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
