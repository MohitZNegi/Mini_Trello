import { useState } from "react";
import Column from "./Column";

const initialBoard = {
  todo: [],
  doing: [],
  done: [],
};

const Board = () => {
  const [board, setBoard] = useState(initialBoard);

  const addNote = (columnKey, text) => {
    if (text.trim() === "") return;

    const newNote = {
      id: Date.now(),
      text,
    };

    setBoard((prev) => ({
      ...prev,
      [columnKey]: [...prev[columnKey], newNote],
    }));
  };

  const deleteNote = (columnKey, noteId) => {
    setBoard((prev) => ({
      ...prev,
      [columnKey]: prev[columnKey].filter((note) => note.id !== noteId),
    }));
  };

  return (
    <div className="board">
      <h2>Kanban Board</h2>

      <div className="columns">
        {Object.keys(board).map((key) => (
          <Column
            key={key}
            title={key}
            notes={board[key]}
            addNote={addNote}
            deleteNote={deleteNote}
          />
        ))}
      </div>
    </div>
  );
};

export default Board;
