import { useEffect, useState } from 'react';
import { useTheme } from 'styled-components';
import { changeThemeTimeMs, minimumLoadingTime } from '../config/variables';

export const wait = (fn, time = minimumLoadingTime) => setInterval(fn, time);

const useThemeChanged = () => {
  const theme = useTheme();
  const [isFirstTheme, setIsFirstTheme] = useState(true);
  const [themeChanged, setThemeChanged] = useState(false);

  useEffect(() => {
    if (isFirstTheme) setIsFirstTheme(false);

    setThemeChanged(true);

    const timer = wait(() => {
      setThemeChanged(false);
    }, changeThemeTimeMs);

    return () => {
      clearInterval(timer);
    };
  }, [theme]);

  return {
    isFirstTheme,
    themeChanged,
  };
};

export default useThemeChanged;
