import { useEffect, useState } from 'react';
import { useTheme } from 'styled-components';
import { lightTheme } from '../config/theme';

const useThemeState = () => {
  const [isLightMode, setIsLightMode] = useState(true);
  const theme = useTheme();

  useEffect(() => {
    setIsLightMode(theme === lightTheme);
  }, [theme]);

  return [isLightMode, setIsLightMode];
};

export default useThemeState;
