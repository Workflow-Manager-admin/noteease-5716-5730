import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

// PUBLIC_INTERFACE
/**
 * Main note editing component
 */
const NoteEditor = () => {
  const { theme } = useTheme();
  
  // Placeholder state for note content
  const [title, setTitle] = useState('Welcome Note');
  const [content, setContent] = useState('Welcome to NoteEase! This is a simple note-taking application with a skeuomorphic design. Try toggling between dark and light themes using the button in the header.');
  
  return (
    <div className={`note-editor ${theme}`}>
      <div className="editor-header">
        <input
          type="text"
          className="note-title-input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Note Title"
        />
        <div className="editor-actions">
          <button className="editor-btn save-btn">Save</button>
          <button className="editor-btn delete-btn">Delete</button>
        </div>
      </div>
      
      <div className="editor-content">
        <textarea
          className="note-content-input"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Start typing your note here..."
        />
      </div>
    </div>
  );
};

export default NoteEditor;
