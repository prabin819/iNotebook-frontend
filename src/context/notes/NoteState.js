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
          "_id": "666434805bb35814cfc46eb6",
          "user": "6663dffd5137cfc9c6e0cc22",
          "title": "My Title",
          "description": "Please wake up early",
          "tag": "",
          "date": "2024-06-08T10:37:52.898Z",
          "__v": 0
        },
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
          "_id": "666434805bb35814cfc46eb6",
          "user": "6663dffd5137cfc9c6e0cc22",
          "title": "My Title",
          "description": "Please wake up early",
          "tag": "",
          "date": "2024-06-08T10:37:52.898Z",
          "__v": 0
        },
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
          "_id": "666434805bb35814cfc46eb6",
          "user": "6663dffd5137cfc9c6e0cc22",
          "title": "My Title",
          "description": "Please wake up early",
          "tag": "",
          "date": "2024-06-08T10:37:52.898Z",
          "__v": 0
        },
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
          "_id": "666434805bb35814cfc46eb6",
          "user": "6663dffd5137cfc9c6e0cc22",
          "title": "My Title",
          "description": "Please wake up early",
          "tag": "",
          "date": "2024-06-08T10:37:52.898Z",
          "__v": 0
        },
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
          "_id": "666434805bb35814cfc46eb6",
          "user": "6663dffd5137cfc9c6e0cc22",
          "title": "My Title",
          "description": "Please wake up early",
          "tag": "",
          "date": "2024-06-08T10:37:52.898Z",
          "__v": 0
        },
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
          "_id": "666434805bb35814cfc46eb6",
          "user": "6663dffd5137cfc9c6e0cc22",
          "title": "My Title",
          "description": "Please wake up early",
          "tag": "",
          "date": "2024-06-08T10:37:52.898Z",
          "__v": 0
        },
        {
          "_id": "666434805bb35814cfc46eb6",
          "user": "6663dffd5137cfc9c6e0cc22",
          "title": "My Title",
          "description": "Please wake up early",
          "tag": "",
          "date": "2024-06-08T10:37:52.898Z",
          "__v": 0
        }
      ];

      const [notes, setNotes] = useState(notesInitial)

  return (
    <NoteContext.Provider value={{notes, setNotes}}>
        {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState