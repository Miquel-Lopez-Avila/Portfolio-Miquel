import React from 'react';
import PropTypes from 'prop-types';
import { SunStyle, Wrapper } from './Sun.styled';

const Sun = ({ unMountCurrentTheme, onSunAnimationEnd }) => {
  return (
    <Wrapper unMountCurrentTheme={unMountCurrentTheme} onAnimationEnd={onSunAnimationEnd}>
      <SunStyle />
    </Wrapper>
  );
};

Sun.propTypes = {
  unMountCurrentTheme: PropTypes.bool.isRequired,
  onSunAnimationEnd: PropTypes.func.isRequired,
};

export default Sun;
