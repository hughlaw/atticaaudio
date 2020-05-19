import PropTypes from 'prop-types';
import React, { useRef, useState, useEffect } from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { throttle } from 'lodash';

import Logo from '../images/Attica_Logo_Reverse.svg';
import styled from 'styled-components';

const Splash = () => {
  return (
    <div id="splash">
      <img src={Logo} alt="attica logo" />
      <ExpandMoreIcon fontSize="large" />
    </div>
  );
};

const Backdrop = styled.div`
  position: fixed;
  z-index: 1;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
`;

const Header = ({ siteTitle }) => {
  const navRef = useRef(null);
  const menuToggleRef = useRef(null);
  const headerRef = useRef(null);

  const checkMenuVisibility = () => {
    const viewport_height = window.innerHeight;
    const scroll_length = window.scrollY;

    if (scroll_length > viewport_height) {
      headerRef.current.classList.add('is-active');
    } else {
      headerRef.current.classList.remove('is-active');
    }
  };

  const handleScroll = throttle(checkMenuVisibility, 500);

  const [showBackdrop, setShowBackdrop] = useState(false);

  const onToggleMenu = () => {
    setShowBackdrop(!showBackdrop);
    menuToggleRef.current.classList.toggle('is-active');
    navRef.current.classList.toggle('is-active');
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <>
      <header ref={headerRef}>
        <h1>{siteTitle}</h1>
        <button
          className="hamburger hamburger--spin"
          type="button"
          aria-label="Menu"
          aria-controls="navigation"
          ref={menuToggleRef}
          onClick={onToggleMenu}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
      </header>
      {showBackdrop && <Backdrop onClick={onToggleMenu} />}
      <nav id="navigation" ref={navRef}>
        <ul>
          <li>
            <a href="#about" onClick={onToggleMenu}>
              About Us
            </a>
          </li>
          <li>
            <a href="#tour" onClick={onToggleMenu}>
              Tour
            </a>
          </li>
          <li>
            <a href="#equipment" onClick={onToggleMenu}>
              Equipment
            </a>
          </li>
          <li>
            <a href="#rates" onClick={onToggleMenu}>
              Rates & Bookings
            </a>
          </li>
          <li>
            <a href="#contact" onClick={onToggleMenu}>
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
      <Splash />
    </>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

export default Header;
