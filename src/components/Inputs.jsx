import React, { useState } from "react"
function Inputs(props){
    const [note,setNote]=useState(
        {
            title:"",
            content:""
        }
    )
    function handlechange(event){
        //destructuring event.target.name and event.target.value
      const {name,value}=event.target;
      setNote(prev=>{
          return {
              ...prev,
              [name]:value
          }
      })
    }
    function submitNote(event){
        props.addNote(note);
        setNote({
            title:"",
            content:""
        })
        //prevent entire reloading of page
        event.preventDefault();
    }
return (
<div>
<form>
    <input value={note.title} name="title" onChange={handlechange}  placeholder="Title"/>
    <textarea value={note.content} name="content" onChange={handlechange}  placeholder="write a note..." row="3"/>
    <button onClick={submitNote} >Add</button>
</form>
</div>
)
}
export default Inputs