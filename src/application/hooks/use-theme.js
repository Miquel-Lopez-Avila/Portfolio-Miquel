import { useEffect, useState } from 'react';
import {darkTheme, lightTheme} from '../config/theme';

const useTheme = () => {
  const [theme, setTheme] = useState(darkTheme);

  return [theme, setTheme];
};

export default useTheme;
