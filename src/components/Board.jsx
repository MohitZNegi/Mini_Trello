import { useState } from "react";

const Board = () => {
  // State: list of all notes on the board
  const [notes, setNotes] = useState([]);

  // State: input value for new note
  const [input, setInput] = useState("");

  // Add a new note
  const addNote = () => {
    if (input.trim() === "") return;

    const newNote = {
      id: Date.now(), // unique id
      text: input,
      x: 50,
      y: 50,
    };

    setNotes((prevNotes) => [...prevNotes, newNote]);
    setInput("");
  };

  // Delete a note by id
  const deleteNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  return (
    <div className="board">
      <h2>Sticky Notes Board</h2>

      {/* Input section */}
      <div className="controls">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Write a note..."
        />
        <button onClick={addNote}>Add</button>
      </div>

      {/* Notes container */}
      <div className="notes-area">
        {notes.map((note) => (
          <div key={note.id} className="note">
            <p>{note.text}</p>
            <button onClick={() => deleteNote(note.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Board;
