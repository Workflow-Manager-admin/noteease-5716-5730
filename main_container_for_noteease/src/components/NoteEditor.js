import React from 'react';
import { useTheme } from '../context/ThemeContext';

// PUBLIC_INTERFACE
/**
 * Main note editing component
 * @param {Object} props - Component props
 * @param {Object} props.currentNote - Current note object to display and edit
 * @param {Function} props.onUpdateNote - Function to call when note content changes
 */
const NoteEditor = ({ currentNote, onUpdateNote }) => {
  const { theme } = useTheme();
  
  // If no note is selected or available
  if (!currentNote) {
    return (
      <div className={`note-editor ${theme}`}>
        <div className="editor-content" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <p>No note selected. Please select a note from the sidebar or create a new one.</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className={`note-editor ${theme}`}>
      <div className="editor-header">
        <input
          type="text"
          className="note-title-input"
          value={currentNote.title}
          onChange={(e) => onUpdateNote(currentNote.id, 'title', e.target.value)}
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
          value={currentNote.content}
          onChange={(e) => onUpdateNote(currentNote.id, 'content', e.target.value)}
          placeholder="Start typing your note here..."
        />
      </div>
    </div>
  );
};

export default NoteEditor;
