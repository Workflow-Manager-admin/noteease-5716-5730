import React from 'react';
import { useTheme } from '../context/ThemeContext';

// PUBLIC_INTERFACE
/**
 * Sidebar component for displaying and organizing notes
 */
const NotesSidebar = () => {
  const { theme } = useTheme();
  
  // Placeholder notes data
  const notes = [
    { id: 1, title: 'Welcome Note', preview: 'Welcome to NoteEase!', active: true },
    { id: 2, title: 'Shopping List', preview: 'Milk, Eggs, Bread...', active: false },
    { id: 3, title: 'Meeting Notes', preview: 'Team meeting agenda...', active: false },
    { id: 4, title: 'Ideas', preview: 'App features brainstorming...', active: false },
  ];
  
  return (
    <aside className={`notes-sidebar ${theme}`}>
      <div className="sidebar-header">
        <h2>My Notes</h2>
        <button className="new-note-btn">
          <span>+</span> New Note
        </button>
      </div>
      
      <div className="notes-list">
        {notes.map(note => (
          <div 
            key={note.id} 
            className={`note-item ${note.active ? 'active' : ''}`}
          >
            <h3 className="note-title">{note.title}</h3>
            <p className="note-preview">{note.preview}</p>
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
