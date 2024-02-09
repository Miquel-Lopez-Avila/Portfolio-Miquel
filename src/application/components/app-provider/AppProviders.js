import React from 'react';
import PropTypes from 'prop-types';
import useTheme from '../../hooks/use-theme';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import messages, { I18nContext } from '../../config/I18nContext';
import useLang from '../../hooks/use-language';
import { Config } from '../../config';

const AppProviders = ({ children }) => {
  const [theme, setTheme] = useTheme();
  const [language, setLanguage] = useLang();

  return (
    <Config.Provider value={{ setLanguage, setTheme }}>
      <I18nContext.Provider value={{ messages, language }}>
        <StyledThemeProvider theme={theme}>
          {children}
        </StyledThemeProvider>
      </I18nContext.Provider>
    </Config.Provider>
  );
};

AppProviders.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppProviders;
