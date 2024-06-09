import React from 'react'
import { useContext } from "react";
import NoteContext from "../context/notes/NoteContext";
import Noteitem from './Noteitem';

const Notes = () => {

    const {notes, setNotes} = useContext(NoteContext);

  return (
    <div className="row my-3">
        <h1>Your notes.</h1>
        {notes.map((note)=>{
            return <Noteitem note={note}/>;
        })}
      </div>
  )
}

export default Notes
