import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from 'styled-components';
import useThemeState from '../../../../hooks/use-theme-state';
import useThemeChanged from '../../../../hooks/use-theme-changed';
import DarkMode from './backgrounds/dark-mode';
import LightMode from './backgrounds/light-mode';
import { ContentStyle, Wrapper } from './Content.styled';

const Content = ({ children }) => {
  const { isFirstTheme } = useThemeChanged();
  const [isLightMode] = useThemeState();
  const theme = useTheme();

  return (
    <ContentStyle isLightMode={isLightMode}>
      <LightMode isLightMode={isLightMode} isFirstTheme={isFirstTheme} showAirplane gradient />
      <DarkMode isLightMode={isLightMode} isFirstTheme={isFirstTheme} showShootingStar isContentBackground gradient={true}/>
      {children}
    </ContentStyle>
  );
};

Content.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Content;
