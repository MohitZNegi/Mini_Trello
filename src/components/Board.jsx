import { useState } from "react";
import Column from "./Column";

const initialBoard = {
  todo: [],
  doing: [],
  done: [],
};

const Board = () => {
  const [board, setBoard] = useState(initialBoard);

  // Add a note to a column
  const addNote = (columnKey, text) => {
    if (!text.trim()) return;
    const newNote = { id: Date.now(), text };
    setBoard((prev) => ({
      ...prev,
      [columnKey]: [...prev[columnKey], newNote],
    }));
  };

  // Update note text
  const updateNote = (columnKey, noteId, newText) => {
    setBoard((prev) => ({
      ...prev,
      [columnKey]: prev[columnKey].map((note) =>
        note.id === noteId ? { ...note, text: newText } : note,
      ),
    }));
  };

  // Delete note
  const deleteNote = (columnKey, noteId) => {
    setBoard((prev) => ({
      ...prev,
      [columnKey]: prev[columnKey].filter((n) => n.id !== noteId),
    }));
  };

  return (
    <div className="board">
      <h2>Kanban Board</h2>
      <div className="columns">
        {Object.keys(board).map((key) => (
          <Column
            key={key}
            columnKey={key}
            notes={board[key]}
            addNote={addNote}
            updateNote={updateNote}
            deleteNote={deleteNote}
          />
        ))}
      </div>
    </div>
  );
};

export default Board;
