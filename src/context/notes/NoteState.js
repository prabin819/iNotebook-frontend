import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
//   const s1 = {
//     name: "Harry",
//     class: "5b",
//   };

  const [state, setState] = useState({
        name: "Harry",
        class: "5b",
      });

      const update = ()=>{
        setTimeout(()=>{
            setState({
                name: "Prabin",
                class: "10b",
              });
        },2000);
      }

  return (
    <NoteContext.Provider value={{state, update}}> 
        {props.children}
    </NoteContext.Provider>
  );
};
//{{state: state, update: update}}
export default NoteState