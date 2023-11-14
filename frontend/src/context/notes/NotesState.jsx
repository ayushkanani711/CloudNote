import React, { useState } from "react";
import NoteContext from "./noteContext.jsx";

const NoteState = (props) => {
  const host = "http://localhost:4000";

  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);
  
  //show alert message
  const [alert, setAlert] = useState(null);
  const showalert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
    
  };
  const capitalize = (word) => {
    let lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };


  // Get all note
  const getNotes = async () => {
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":localStorage.getItem('token')

      },
    });
    const json = await response.json();
    // console.log(json);
    setNotes(json);
  };

  // Add a note
  const addNote = async (title, description, tag) => {
    const response = await fetch(`${host}/api/notes/addnotes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":localStorage.getItem('token')
      },
      body: JSON.stringify({ title, description, tag }),
    });

    const note = await response.json();
    setNotes(notes.concat(note));
    showalert('Note Added', 'primary')
  };

  // Delete a note
  const deleteNote = async (id) => {
    //API call for delete that note
    await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":localStorage.getItem('token')
      },
    });
    // Fetch the updated notes after deletion
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":localStorage.getItem('token')

      },
    });
    const json = await response.json();
    console.log("response of json at deleteNote");
    setNotes(json);
    showalert('Note deleted', 'danger')
  }; 

  // Edit a note
  const editNote = async (id, title, description, tag) => {
    //API call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":localStorage.getItem('token')
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = response.json();

    //logic to edit in clinet
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        notes[index].title = title;
        notes[index].description = description;
        notes[index].tag = tag;
      }
    }
    showalert('Note Updated', 'success')

  };

  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, getNotes, showalert , capitalize , alert, setAlert }} >
            {props.children}
      {/* <div style={{ height: "50px" }}>
        {alert && ( <div className={`alert alert-primary alert-${alert.type}`} role="alert" >
            <strong>{capitalize(alert.type)}</strong>: {alert.msg}
          </div>
        )}
      </div> */}
    </NoteContext.Provider>
  );
};

export default NoteState;
