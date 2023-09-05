import { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const storedTheme = localStorage.getItem('theme');
  const [theme, setTheme] = useState(storedTheme || 'light'); 

  useEffect(() => {
    localStorage.setItem('theme', theme);
    const body = document.body;
    if (theme === "dark") {
      body.classList.add("dark");
    } else {
      body.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const backgroundColor = theme === 'light' ? '#ffffff' : '#000000';

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, backgroundColor }}>
      {children}
    </ThemeContext.Provider>
  );
};
