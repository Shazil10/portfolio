//loader.js

import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import anime from 'animejs';
import styled from 'styled-components';
import { IconLoader } from '@components/icons';

const StyledLoader = styled.div`
  ${({ theme }) => theme.mixins.flexCenter};
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: var(--dark-navy);
  z-index: 99;

  .logo-wrapper {
    width: max-content;
    max-width: 100px;
    transition: var(--transition);
    opacity: ${props => (props.isMounted ? 1 : 0)};
    svg {
      display: block;
      width: 100%;
      height: 100%;
      margin: 0 auto;
      fill: none;
      user-select: none;
    }
  }
`;

/** Splash visible long enough to read; friend’s template felt ~1.5s+. */
const LOADER_MIN_VISIBLE_MS = 1600;

const Loader = ({ finishLoading }) => {
  const [isMounted, setIsMounted] = useState(false);

  const animate = () => {
    const startedAt = Date.now();

    const endLoader = () => {
      const elapsed = Date.now() - startedAt;
      const rest = Math.max(0, LOADER_MIN_VISIBLE_MS - elapsed);
      window.setTimeout(() => finishLoading(), rest);
    };

    const loader = anime.timeline({
      complete: endLoader,
    });

    loader
      .add({
        targets: '#logo',
        duration: 850,
        easing: 'easeOutQuart',
        opacity: [0, 1],
        scale: [0.86, 1],
      })
      .add({
        targets: '#logo',
        delay: 400,
        duration: 380,
        easing: 'easeInOutQuart',
        opacity: 0,
        scale: 0.92,
      })
      .add({
        targets: '.loader',
        duration: 280,
        easing: 'easeInOutQuart',
        opacity: 0,
        zIndex: -1,
      });
  };

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 10);
    animate();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <StyledLoader className="loader" isMounted={isMounted}>
      <Helmet bodyAttributes={{ class: `hidden` }} />

      <div className="logo-wrapper">
        <IconLoader />
      </div>
    </StyledLoader>
  );
};

Loader.propTypes = {
  finishLoading: PropTypes.func.isRequired,
};

export default Loader;
