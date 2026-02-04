import { useState } from "react";
import Note from "./Note";

const Column = ({ title, notes, addNote, deleteNote }) => {
  const [input, setInput] = useState("");

  const handleAdd = () => {
    addNote(title, input);
    setInput("");
  };

  return (
    <div className="column">
      <h3>{title.toUpperCase()}</h3>

      <div className="note-input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a note..."
        />
        <button onClick={handleAdd}>+</button>
      </div>

      {notes.map((note) => (
        <Note
          key={note.id}
          note={note}
          columnKey={title}
          deleteNote={deleteNote}
        />
      ))}
    </div>
  );
};

export default Column;
