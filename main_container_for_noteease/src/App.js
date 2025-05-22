import React, { useState } from 'react';
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
  // Initial notes data
  const [notes, setNotes] = useState([
    { id: 1, title: 'Welcome Note', content: 'Welcome to NoteEase! This is a simple note-taking application with a skeuomorphic design. Try toggling between dark and light themes using the button in the header.' },
    { id: 2, title: 'Shopping List', content: 'Milk, Eggs, Bread, Cheese, Vegetables, Fruits, Chocolate' },
    { id: 3, title: 'Meeting Notes', content: 'Team meeting agenda: Project updates, New features discussion, Timeline review, Q&A session' },
    { id: 4, title: 'Ideas', content: 'App features brainstorming: Cloud sync, Rich text editor, Tags and categories, Search functionality, Dark mode' },
  ]);
  
  // Track the current selected note
  const [currentNoteId, setCurrentNoteId] = useState(1);
  
  // Get current note object based on ID
  const currentNote = notes.find(note => note.id === currentNoteId) || null;
  
  /**
   * Handle selection of a note
   * @param {number} noteId - ID of the note to select
   */
  const handleSelectNote = (noteId) => {
    setCurrentNoteId(noteId);
  };
  
  /**
   * Create a new note with default content
   */
  const handleAddNote = () => {
    // Find the maximum ID to ensure unique IDs
    const maxId = Math.max(...notes.map(note => note.id), 0);
    
    // Create new note
    const newNote = {
      id: maxId + 1,
      title: 'New Note',
      content: 'Start typing your note here...'
    };
    
    // Add to notes array and select it
    setNotes([...notes, newNote]);
    setCurrentNoteId(newNote.id);
  };
  
  /**
   * Update a note's content
   * @param {number} noteId - ID of the note to update
   * @param {string} field - Field to update (title or content)
   * @param {string} value - New value for the field
   */
  const handleUpdateNote = (noteId, field, value) => {
    setNotes(notes.map(note => 
      note.id === noteId 
        ? { ...note, [field]: value } 
        : note
    ));
  };
  
  /**
   * Delete a note
   * @param {number} noteId - ID of the note to delete
   */
  const handleDeleteNote = (noteId) => {
    // Filter out the deleted note
    const updatedNotes = notes.filter(note => note.id !== noteId);
    setNotes(updatedNotes);
    
    // If the deleted note was the currently selected note, select another note
    if (currentNoteId === noteId) {
      // Select the first available note, or null if no notes remain
      const nextNoteId = updatedNotes.length > 0 ? updatedNotes[0].id : null;
      setCurrentNoteId(nextNoteId);
    }
  };

  return (
    <ThemeProvider>
      <div className="noteease-app">
        <Header />
        <div className="main-container">
          <NotesSidebar 
            notes={notes} 
            activeNoteId={currentNoteId}
            onSelectNote={handleSelectNote}
            onAddNote={handleAddNote}
          />
          <NoteEditor 
            currentNote={currentNote}
            onUpdateNote={handleUpdateNote}
            onDeleteNote={handleDeleteNote}
          />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
