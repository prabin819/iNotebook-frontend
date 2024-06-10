import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {

    const host = "http://localhost:5000"

    const notesInitial = [];

      const [notes, setNotes] = useState(notesInitial);

    //fetch all note
    const getNotes = async ()=>{
        //api call
        const url = `${host}/api/notes/fetchallnotes`;
        const response = await fetch(url, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY2M2RmZmQ1MTM3Y2ZjOWM2ZTBjYzIyIn0sImlhdCI6MTcxNzgzODExMX0.on0XHGFMGj2Z9ydDkDL9Go7LB4gqPQBE4ggOR_pNmSQ"
            }
          });
           const json = await response.json();
           //console.log(json);
           setNotes(json);
          
      }

      //add a note
      const addNote = async (title, description, tag)=>{
        //api call
        const url = `${host}/api/notes/addnote`;
        const response = await fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY2M2RmZmQ1MTM3Y2ZjOWM2ZTBjYzIyIn0sImlhdCI6MTcxNzgzODExMX0.on0XHGFMGj2Z9ydDkDL9Go7LB4gqPQBE4ggOR_pNmSQ"
            },
            body: JSON.stringify({title, description, tag}),
          });
          const note = await response.json();
          //frontend
           setNotes(notes.concat(note));
      }
      //delete a note
      const deleteNote = async (id)=>{
        //console.log(id);
        //api call
        const url = `${host}/api/notes/deletenote/${id}`;
        //const response = 
        await fetch(url, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY2M2RmZmQ1MTM3Y2ZjOWM2ZTBjYzIyIn0sImlhdCI6MTcxNzgzODExMX0.on0XHGFMGj2Z9ydDkDL9Go7LB4gqPQBE4ggOR_pNmSQ"
            }
          });
           //const json = await response.json();
           //console.log(json);
        //
        //console.log("deleting note with id = " + id);
        const newNotes = notes.filter((note)=>{return note._id !== id});
        setNotes(newNotes);
      }

      //edit a note
      const editNote = async (id, title, description, tag)=>{
        //api call
        const url = `${host}/api/notes/updatenote/${id}`;
        const response = await fetch(url, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY2M2RmZmQ1MTM3Y2ZjOWM2ZTBjYzIyIn0sImlhdCI6MTcxNzgzODExMX0.on0XHGFMGj2Z9ydDkDL9Go7LB4gqPQBE4ggOR_pNmSQ"
            },
            body: JSON.stringify({title, description, tag}),
          });
          const json = await response.json();
          //setNotes(json);
        let newNotes = JSON.parse(JSON.stringify(notes));
        //logic to edit at client side
        for (let index = 0; index < newNotes.length; index++) {
            const element = newNotes[index];
            if(element._id===id){
                newNotes[index].title=title
                newNotes[index].description=description
                newNotes[index].tag=tag
                break;
            }
            
            }
        setNotes(newNotes)
      }

  return (
    <NoteContext.Provider value={{notes, addNote, deleteNote, editNote, getNotes}}>
        {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState