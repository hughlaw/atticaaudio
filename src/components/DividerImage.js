import React from 'react';
import { GatsbyImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from 'gatsby';
import { PropTypes } from 'prop-types';

export default function DividerImage({ alt }) {
  const { image } = useStaticQuery(graphql`{
  image: file(relativePath: {eq: "vu-units.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 300, layout: CONSTRAINED)
    }
  }
}`);

  return (
    <GatsbyImage
      image={image.childImageSharp.gatsbyImageData}
      className="divider-image"
      alt={alt} />
  );
}

DividerImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
