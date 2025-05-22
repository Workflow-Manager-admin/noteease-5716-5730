import React from 'react';
import './App.css';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import NotesSidebar from './components/NotesSidebar';
import NoteEditor from './components/NoteEditor';

// PUBLIC_INTERFACE
/**
 * Main application component for NoteEase
 */
function App() {
  return (
    <ThemeProvider>
      <div className="noteease-app">
        <Header />
        <div className="main-container">
          <NotesSidebar />
          <NoteEditor />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
