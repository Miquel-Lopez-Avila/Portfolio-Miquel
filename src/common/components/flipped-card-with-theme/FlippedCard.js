import React from 'react';
import PropTypes from 'prop-types';
import useThemeState from '../../../application/hooks/use-theme-state';
import { Wrapper } from './FlippedCard.styled';

const FlippedCardWithTheme = ({
  children, radius, withBorder, fullWidthOnMobile, width, height, pointer, delay,
}) => {
  const [isLightMode] = useThemeState();

  return (
    <Wrapper radius={radius} pointer={pointer} delay={delay} width={width} height={height} fullWidthOnMobile={fullWidthOnMobile} withBorder={withBorder} isLightMode={isLightMode}>
      {children}
    </Wrapper>
  );
};

FlippedCardWithTheme.propTypes = {
  children: PropTypes.node.isRequired,
  radius: PropTypes.string,
  withBorder: PropTypes.bool,
};

export default FlippedCardWithTheme;
