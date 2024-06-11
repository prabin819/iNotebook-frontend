import React,{ useContext, useState } from 'react'
import NoteContext from "../context/notes/NoteContext";


const AddNote = (props) => {
    const {addNote} = useContext(NoteContext);
    const [note, setNote] = useState({title: "", description: "", tag: ""})
    const handleClick = (e)=>{
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        props.showAlert("added successfully","success");
        setNote({title: "", description: "", tag: ""});
    }
    const onChange = (e)=>{
        setNote({...note, [e.target.name] : e.target.value})
    }
  return (
    <div>
      <div className="container my-3">
        <h1>Add a note.</h1>
        <form className="container my-3">
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              name='title'
              value={note.title}
              aria-describedby="emailHelp"
              placeholder="Enter title"
              onChange={onChange}
              minLength={5}
              required
            />
            
          </div>
          <div className="form-group">
            <label htmlFor="description">description</label>
            <input
              type="text"
              className="form-control"
              id="description"
              name='description'
              value={note.description}
              placeholder="description"
              onChange={onChange}
              minLength={5}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="tag">tag</label>
            <input
              type="text"
              className="form-control"
              id="tag"
              name='tag'
              value={note.tag}
              placeholder="tag"
              onChange={onChange}
            />
          </div>
          
          <button type="submit" className="btn btn-primary" onClick={handleClick} disabled={note.title.length<5 || note.description.length<5}>
            Add Note
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddNote
