const Note = ({ note, columnKey, deleteNote }) => {
  return (
    <div className="note">
      <p>{note.text}</p>
      <button onClick={() => deleteNote(columnKey, note.id)}>✕</button>
    </div>
  );
};

export default Note;
