import React from 'react';
import { useTheme } from '../context/ThemeContext';

// PUBLIC_INTERFACE
/**
 * Sidebar component for displaying and organizing notes
 * @param {Object} props - Component props
 * @param {Array} props.notes - Array of note objects
 * @param {number} props.activeNoteId - ID of the currently active note
 * @param {Function} props.onSelectNote - Function to call when a note is selected
 * @param {Function} props.onAddNote - Function to call when the add note button is clicked
 */
const NotesSidebar = ({ notes = [], activeNoteId, onSelectNote, onAddNote }) => {
  const { theme } = useTheme();
  
  return (
    <aside className={`notes-sidebar ${theme}`}>
      <div className="sidebar-header">
        <h2>My Notes</h2>
        <button 
          className="new-note-btn"
          onClick={onAddNote}
          aria-label="Create a new note"
        >
          <span>+</span> New Note
        </button>
      </div>
      
      <div className="notes-list">
        {notes.map(note => (
          <div 
            key={note.id} 
            className={`note-item ${note.id === activeNoteId ? 'active' : ''}`}
            onClick={() => onSelectNote(note.id)}
          >
            <h3 className="note-title">{note.title}</h3>
            <p className="note-preview">
              {note.content.length > 50 
                ? `${note.content.substring(0, 50)}...` 
                : note.content}
            </p>
          </div>
        ))}
      </div>
      
      <div className="sidebar-footer">
        <p className="note-count">{notes.length} notes</p>
      </div>
    </aside>
  );
};

export default NotesSidebar;
