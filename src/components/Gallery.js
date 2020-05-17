import React, { useRef, useEffect } from 'react';
import EmblaCarousel from 'embla-carousel';
import Img from 'gatsby-image';
import { PropTypes } from 'prop-types';

export default function Gallery({ images }) {
  const emblaNode = useRef(null);
  const emblaOptions = {
    loop: true,
  };

  useEffect(() => {
    EmblaCarousel(emblaNode.current, emblaOptions);
  });

  return (
    <div className="embla" ref={emblaNode}>
      <div className="embla__container">
        {images.map((image) => (
          <div key={image._key} className="embla__slide">
            <Img fluid={image.asset.fluid} alt={image.alt} />
          </div>
        ))}
      </div>
    </div>
  );
}

Gallery.propTypes = {
  images: PropTypes.array.isRequired,
};
