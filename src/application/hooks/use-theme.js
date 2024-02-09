import { useEffect, useState } from 'react';
import { lightTheme } from '../config/theme';

const useTheme = () => {
  const [theme, setTheme] = useState(lightTheme);

  return [theme, setTheme];
};

export default useTheme;
