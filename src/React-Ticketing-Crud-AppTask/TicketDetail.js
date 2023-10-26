import { useState } from "react";

const TicketDetail =(props)=>{
    let ticketData = props.ticketData;
    const id =  ticketData.id;
    let [subject , setSubject]= useState(ticketData.subject);
    let [desc , setDesc]= useState(ticketData.desc);
    let [email , setEmail]= useState(ticketData.email);
    let [status , setStatus]= useState(ticketData.status);
    let [assignedTo , setAssigne]= useState(ticketData.assignedTo);
    const newdata = {id,subject,desc,email,assignedTo,status};

    return (
        <div>
            <p><b>Edit the Ticket</b></p>
            <input type="text" value={subject} onChange={ (e)=>setSubject(e.target.value)}/>  
            <input type="text" value={desc} onChange={(e)=> setDesc(e.target.value)}/>
            <input type="text" value={email} onChange={(e)=> setEmail(e.target.value)}/>
            <input type="text" value={status}/>
            <input type="text" value={assignedTo}/>
            <button  className='submitBtn' onClick= {()=>props.handleEditTicket(newdata)}>Save</button> 
            <button className="canclBtn" onClick = {() => props.isLoadEditPage(false)}>Cancel</button>
        </div>
    )
}
export default TicketDetail;
