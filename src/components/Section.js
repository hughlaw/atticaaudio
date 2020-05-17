import React from 'react';
import styled from 'styled-components';
import { PropTypes } from 'prop-types';

const Heading = styled.h2`
  text-transform: uppercase;
`;

export default function Section({ id, title, fullWidth, children }) {
  return (
    <section id={id} className={fullWidth ? 'full-width' : ''}>
      <Heading>{title}</Heading>
      {children}
    </section>
  );
}

Section.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  fullWidth: PropTypes.bool,
  children: PropTypes.node,
};
