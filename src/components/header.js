import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Logo from '../images/Attica_Logo_Reverse.svg';
import styled from 'styled-components';

const Splash = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background: url(${(props) => props.image});
  background-color: #454545;
  background-blend-mode: multiply;
  background-size: cover;
`;

const Backdrop = styled.div`
  position: fixed;
  z-index: 1;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
`;

const Header = ({ siteTitle, headerImage }) => {
  const navRef = useRef(null);
  const menuToggleRef = useRef(null);

  const [showBackdrop, setShowBackdrop] = useState(false);

  const onToggleMenu = () => {
    setShowBackdrop(!showBackdrop);
    menuToggleRef.current.classList.toggle('is-active');
    navRef.current.classList.toggle('is-active');
  };

  return (
    <>
      <header>
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
      <Splash id="splash" image={headerImage}>
        <img src={Logo} alt="attica logo" />
        <ExpandMoreIcon fontSize="large" />
      </Splash>
    </>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

export default Header;
