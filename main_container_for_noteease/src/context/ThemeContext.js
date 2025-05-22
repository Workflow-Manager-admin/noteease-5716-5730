import React, { createContext, useState, useContext, useEffect } from 'react';

// PUBLIC_INTERFACE
/**
 * Context for managing theme state throughout the application
 */
const ThemeContext = createContext();

// PUBLIC_INTERFACE
/**
 * Provider component for theme context
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components
 */
export const ThemeProvider = ({ children }) => {
  // Check for user's preferred theme or stored preference
  const getInitialTheme = () => {
    const storedTheme = localStorage.getItem('theme');
    
    if (storedTheme) {
      return storedTheme;
    }
    
    // Check user preference from system
    const userPrefersDark = window.matchMedia && 
      window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    return userPrefersDark ? 'dark' : 'light';
  };
  
  const [theme, setTheme] = useState(getInitialTheme);
  
  // Toggle between dark and light themes
  const toggleTheme = () => {
    setTheme(prevTheme => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  };
  
  // Update document with theme class when theme changes
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);
  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// PUBLIC_INTERFACE
/**
 * Custom hook to use the theme context
 * @returns {Object} Theme context value containing theme state and toggle function
 */
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
