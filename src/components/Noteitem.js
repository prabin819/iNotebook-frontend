import React ,{useContext} from "react";
import NoteContext from "../context/notes/NoteContext";


const Noteitem = (props) => {
  const { note } = props;
  const {deleteNote} = useContext(NoteContext);

  return (
    <div className="col-md-3">
      
      
      <div className="card my-3">
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">
          {note.description}
          </p>
          <i className="fa-regular fa-trash-can mx-2" onClick={()=>{deleteNote(note._id)}}></i>
          <i className="fa-solid fa-pen-nib mx-2"></i>
          
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
