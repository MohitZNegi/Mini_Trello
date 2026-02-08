import { useState } from "react";

const Note = ({ note, columnKey, updateNote, deleteNote, setDraggedNote }) => {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(note.text);

  const handleUpdate = () => {
    updateNote(columnKey, note.id, text);
    setEditing(false);
  };

  return (
    <div
      className="note"
      draggable
      onDragStart={() =>
        setDraggedNote({ noteId: note.id, fromColumn: columnKey })
      }
    >
      {editing ? (
        <input
          autoFocus
          value={text}
          onChange={(e) => setText(e.target.value)}
          onBlur={handleUpdate}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleUpdate();
          }}
        />
      ) : (
        <p onClick={() => setEditing(true)}>{note.text}</p>
      )}
      <button onClick={() => deleteNote(columnKey, note.id)}>✕</button>
    </div>
  );
};

export default Note;
