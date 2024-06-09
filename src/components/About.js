import React, {useContext, useEffect} from 'react'
import NoteContext from '../context/notes/NoteContext'

const About = () => {
    const a = useContext(NoteContext);
    useEffect(()=>{
        a.update();
        // eslint-disable-next-line 
    },[]);
  return (
    <div>
      This is about {a.state.name} and he is in class {a.state.class}.
    </div>
  )
}

export default About
