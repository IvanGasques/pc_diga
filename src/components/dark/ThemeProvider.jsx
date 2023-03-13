import React, { useState } from 'react';
import ThemeContext from './ThemeContext';

const ThemeProvider = ({ children }) => {
  const [dark, setDark] = useState(false);

  const toggle = () => {
    setDark(!dark);
  };

  const theme = {
    dark,
    toggle,
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
