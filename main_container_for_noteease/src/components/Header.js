import React from 'react';
import ThemeToggle from './ThemeToggle';
import { useTheme } from '../context/ThemeContext';

// PUBLIC_INTERFACE
/**
 * Header component for NoteEase app containing the logo, title and theme toggle
 */
const Header = () => {
  const { theme } = useTheme();
  
  return (
    <header className={`header ${theme}`}>
      <div className="container header-container">
        <div className="logo">
          <span className="logo-icon">📝</span> 
          <h1>NoteEase</h1>
        </div>
        <div className="header-actions">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
