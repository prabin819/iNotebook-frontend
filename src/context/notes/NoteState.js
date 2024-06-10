import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {

    const notesInitial = [
        {
          "_id": "666434805bb35814cfc46eb6",
          "user": "6663dffd5137cfc9c6e0cc22",
          "title": "My Title",
          "description": "Please wake up early",
          "tag": "",
          "date": "2024-06-08T10:37:52.898Z",
          "__v": 0
        },
        {
          "_id": "666434805bb35814cfc46eb61",
          "user": "6663dffd5137cfc9c6e0cc22",
          "title": "My Title",
          "description": "Please wake up early",
          "tag": "",
          "date": "2024-06-08T10:37:52.898Z",
          "__v": 0
        },
        {
          "_id": "666434805bb35814cfc46eb62",
          "user": "6663dffd5137cfc9c6e0cc22",
          "title": "My Title",
          "description": "Please wake up early",
          "tag": "",
          "date": "2024-06-08T10:37:52.898Z",
          "__v": 0
        },
        {
          "_id": "666434805bb35814cfc46eb63",
          "user": "6663dffd5137cfc9c6e0cc22",
          "title": "My Title",
          "description": "Please wake up early",
          "tag": "",
          "date": "2024-06-08T10:37:52.898Z",
          "__v": 0
        },
        {
          "_id": "666434805bb35814cfc46eb64",
          "user": "6663dffd5137cfc9c6e0cc22",
          "title": "My Title",
          "description": "Please wake up early",
          "tag": "",
          "date": "2024-06-08T10:37:52.898Z",
          "__v": 0
        },
        {
          "_id": "666434805bb35814cfc46eb65",
          "user": "6663dffd5137cfc9c6e0cc22",
          "title": "My Title",
          "description": "Please wake up early",
          "tag": "",
          "date": "2024-06-08T10:37:52.898Z",
          "__v": 0
        },
        {
          "_id": "666434805bb35814cfc46eb66",
          "user": "6663dffd5137cfc9c6e0cc22",
          "title": "My Title",
          "description": "Please wake up early",
          "tag": "",
          "date": "2024-06-08T10:37:52.898Z",
          "__v": 0
        },
        {
          "_id": "666434805bb35814cfc46eb67",
          "user": "6663dffd5137cfc9c6e0cc22",
          "title": "My Title",
          "description": "Please wake up early",
          "tag": "",
          "date": "2024-06-08T10:37:52.898Z",
          "__v": 0
        },
        {
          "_id": "666434805bb35814cfc46eb68",
          "user": "6663dffd5137cfc9c6e0cc22",
          "title": "My Title",
          "description": "Please wake up early",
          "tag": "",
          "date": "2024-06-08T10:37:52.898Z",
          "__v": 0
        },
        {
          "_id": "666434805bb35814cfc46eb69",
          "user": "6663dffd5137cfc9c6e0cc22",
          "title": "My Title",
          "description": "Please wake up early",
          "tag": "",
          "date": "2024-06-08T10:37:52.898Z",
          "__v": 0
        },
        {
          "_id": "666434805bb35814cfc46eb610",
          "user": "6663dffd5137cfc9c6e0cc22",
          "title": "My Title",
          "description": "Please wake up early",
          "tag": "",
          "date": "2024-06-08T10:37:52.898Z",
          "__v": 0
        },
        {
          "_id": "666434805bb35814cfc46eb611",
          "user": "6663dffd5137cfc9c6e0cc22",
          "title": "My Title",
          "description": "Please wake up early",
          "tag": "",
          "date": "2024-06-08T10:37:52.898Z",
          "__v": 0
        },
        {
          "_id": "666434805bb35814cfc46eb612",
          "user": "6663dffd5137cfc9c6e0cc22",
          "title": "My Title",
          "description": "Please wake up early",
          "tag": "",
          "date": "2024-06-08T10:37:52.898Z",
          "__v": 0
        }
      ];

      const [notes, setNotes] = useState(notesInitial);

      //add a note
      const addNote = (title, description, tag)=>{
        const note = {
            "_id": "666434805bb35814cfc46eb6",
            "user": "6663dffd5137cfc9c6e0cc22",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2024-06-08T10:37:52.898Z",
            "__v": 0
          }
        setNotes(notes.concat(note));
      }
      //delete a note
      const deleteNote = (id)=>{
        console.log("deleting note with id = " + id);
        const newNotes = notes.filter((note)=>{return note._id !== id});
        setNotes(newNotes);
      }

      //edit a note
      const editNote = (id)=>{
        
      }

  return (
    <NoteContext.Provider value={{notes, addNote, deleteNote, editNote}}>
        {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState