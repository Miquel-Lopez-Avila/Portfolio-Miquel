import React from 'react';
import PropTypes from 'prop-types';
import { MoonStyle, Wrapper } from './Moon.styled';

const Moon = ({ unMountCurrentTheme, onMoonAnimationEnd }) => {
  return (
    <Wrapper unMountCurrentTheme={unMountCurrentTheme} onAnimationEnd={onMoonAnimationEnd}>
      <MoonStyle />
    </Wrapper>
  );
};

Moon.propTypes = {
  unMountCurrentTheme: PropTypes.bool.isRequired,
  onMoonAnimationEnd: PropTypes.func.isRequired,
};

export default Moon;
