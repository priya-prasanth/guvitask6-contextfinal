import { useState } from "react";
import { UserContext } from "../Context/UserContext";

export const UserProvider = ({ children }) => {
  const [notes, setNotes] = useState([
    {
      title: "jij",
      description: "frfr",
    },
  ]);

  let addNote = (note) => {
    setNotes([...notes, note]);
  };

  let deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  let updateNote = (id, title, description) => {
    const affectedNote = notes.map((note) => {
      if (note.id === id) {
        return { ...note, title: title, description: description };
      }
      return note;
    });
    setNotes(affectedNote);
  };

  return (
    <UserContext.Provider value={{ notes, addNote, deleteNote, updateNote }}>
      {children}
    </UserContext.Provider>
  );
};
