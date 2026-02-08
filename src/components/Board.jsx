import { useState } from "react";
import Column from "./Column";

const initialBoard = {
  todo: [],
  doing: [],
  done: [],
};

const Board = () => {
  const [board, setBoard] = useState(initialBoard);
  const [draggedNote, setDraggedNote] = useState(null);

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

  // move note
  const moveNote = (toColumn) => {
    if (!draggedNote) return;

    const { noteId, fromColumn } = draggedNote;
    if (fromColumn === toColumn) return;

    const noteToMove = board[fromColumn].find((n) => n.id === noteId);
    if (!noteToMove) return;

    setBoard((prev) => ({
      ...prev,
      [fromColumn]: prev[fromColumn].filter((n) => n.id !== noteId),
      [toColumn]: [...prev[toColumn], noteToMove],
    }));

    setDraggedNote(null);
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
            setDraggedNote={setDraggedNote}
            moveNote={moveNote}
          />
        ))}
      </div>
    </div>
  );
};

export default Board;
