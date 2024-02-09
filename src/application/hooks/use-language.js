import { useState, useEffect } from 'react';
import { defaultLanguage } from '../config/I18nContext';

const useLang = () => {
  const [language, setLanguage] = useState(defaultLanguage);

  useEffect(() => {
  }, []);

  return [language, setLanguage];
};

export default useLang;
