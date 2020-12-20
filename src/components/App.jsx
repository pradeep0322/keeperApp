import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Inputs from "./Inputs"
function App() {
    const [notes,setNotes]=useState([]);
function add(newNote) {
    setNotes( prevNotes => {
        return  [...prevNotes,newNote];    
    })
}
function deleteNote(index) {
    setNotes( prevNotes => {
        return prevNotes.filter((item,i)=>{
            return i!==index;
        })
    })
   
    
}
  return (
    <div>
      <Header />
      <Inputs addNote={add}/>
      {notes.map((item,index) => {
return  <Note 
title={item.title} 
key={index}
index={index} 
content={item.content} 
deleteNote={deleteNote}/>
      }
      )}
      <Footer />
    </div>
  );
}

export default App;
