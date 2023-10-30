import { useState } from "react";
import { UserContext } from "../Context/UserContext";

export const UserProvider = ({ children }) => {
  const [notes, setNotes] = useState([
    {
      title: "Feedbacks",
      description:
        "lorem Digital feedback management system. we will provide with their class id and password ",
    },
    {
      title: "Weekly Tasks",
      description:
        "lorem jiook nprn management system. we will provide a link to students within a few minutes the whole class",
    },
    {
      title: "Lyrics",
      description:
        "lorem Digital feedback management system. we will provide a link to students with their class id and password, and boom within a few minutes the whole class or say ...",
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
