import React from 'react';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
import { PropTypes } from 'prop-types';

export default function DividerImage({ alt }) {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "vu-units.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Img
      className="divider-image"
      alt={alt}
      fluid={image.childImageSharp.fluid}
    />
  );
}

DividerImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
