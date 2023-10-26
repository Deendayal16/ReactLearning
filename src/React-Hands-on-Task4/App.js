import { useState } from "react";
const  Task4App = ()=> {
  const [text, setText]= useState("");  
  return (
    <div style={{textAlign:"center"}}>
      <div>Enter some text </div>
      <input onChange={(e)=>{setText(e.target.value)}} />
      <h3>Your Text</h3>
      <p>{text}</p>
    </div>
  );
}
export default Task4App;