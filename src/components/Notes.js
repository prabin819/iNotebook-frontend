import React, { useEffect, useRef, useState } from "react";
import { useContext } from "react";
import NoteContext from "../context/notes/NoteContext";
import Noteitem from "./Noteitem";
import AddNote from "./AddNote";
import {useNavigate} from 'react-router-dom'

const Notes = (props) => {
  const { notes, getNotes, editNote } = useContext(NoteContext);
  const [note, setNote] = useState({_id:"", title: "", description: "", tag: ""})
  const navigate = useNavigate();


  useEffect(() => {
    if(localStorage.getItem('token')){

        getNotes();
    }
    else{
        navigate('/login')
    }
    // eslint-disable-next-line
  }, []);

  const ref = useRef(null);
  const refClose = useRef(null);

  const updateNote = (currentNote) => {
    ref.current.click();
    setNote(currentNote);
    //console.log(currentNote);
  };

  const handleClick = (note)=>{

    editNote(note._id, note.title, note.description, note.tag);
    refClose.current.click();
    //props.showAlert("updated successfully", "success")
    props.showAlert("updated successfully","success");

  }
    
    const onChange = (e)=>{
    setNote({...note, [e.target.name] : e.target.value})
}

  return (
    <>
      <AddNote showAlert={props.showAlert}/>

      <button style={{visibility:"hidden"}}
        ref={ref}
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
              Edit Note
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body"><form className="container my-3">
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              name='title'
              aria-describedby="emailHelp"
              placeholder="Enter title"
              value={note.title}
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
              placeholder="description"
              value={note.description}
              onChange={onChange}
              minLength={5}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="tag">description</label>
            <input
              type="text"
              className="form-control"
              id="tag"
              name='tag'
              placeholder="tag"
              value={note.tag}
              onChange={onChange}
            />
          </div>
          
        </form></div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                ref={refClose}
              >
                Close
              </button>
              <button disabled={note.title.length<5 || note.description.length<5} type="button" className="btn btn-primary" onClick={()=>{handleClick(note)}}> 
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-3">
        <h1>Your notes.</h1>
        <div className='container mx-2'>
        {notes.length === 0 && "No notes to display."}
        </div>
        {notes.map((note) => {
          return (
            <Noteitem updateNote={updateNote} key={note._id} note={note} showAlert={props.showAlert}/>
          );
        })}
      </div>
    </>
  );
};

export default Notes;
