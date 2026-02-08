import { useState } from "react";
import Note from "./Note";

const Column = ({
  columnKey,
  notes,
  addNote,
  updateNote,
  deleteNote,
  setDraggedNote,
  moveNote,
}) => {
  const [adding, setAdding] = useState(false);
  const [input, setInput] = useState("");

  const handleAdd = () => {
    addNote(columnKey, input);
    setInput("");
    setAdding(false);
  };

  return (
    <div
      className="column"
      onDragOver={(e) => e.preventDefault()}
      onDrop={() => moveNote(columnKey)}
    >
      <h3>{columnKey.toUpperCase()}</h3>

      {notes.map((note) => (
        <Note
          key={note.id}
          columnKey={columnKey}
          note={note}
          updateNote={updateNote}
          deleteNote={deleteNote}
          setDraggedNote={setDraggedNote}
        />
      ))}

      {adding ? (
        <div className="note new-note">
          <input
            autoFocus
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onBlur={handleAdd}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleAdd();
            }}
            placeholder="Type note..."
          />
        </div>
      ) : (
        <div className="note new-note" onClick={() => setAdding(true)}>
          + Add Note
        </div>
      )}
    </div>
  );
};

export default Column;
