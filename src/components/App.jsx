import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, updateNotes] = useState([]);

  function addNote(note) {
    updateNotes((prev) => {
      return [...prev, note];
    });
    console.log(note);
  }
  function deleteNote(id) {
    console.log("delete was triggered");
    updateNotes((prevNotes) => {
      return prevNotes.filter((notes, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((note, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
