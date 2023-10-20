import { useState } from "react";
import TicketDetail from "./TicketDetail";

const TicketList=(props)=>{
   const ticketsData = props.formData;
   const [detailData , setDeTailData]= useState([]);
   const [isLoadEditPage , setIsLoadEditPage]= useState(false);
    const handleDelelete =(deleteData)=>{
        const { deleteTicket } = props;
        deleteTicket(deleteData);
    };
   const handleEditTicket =(editData)=>{
        const { editTicket } = props;
        console.log("handleEditTicket : "+ editData);
        editTicket(editData);
        setDeTailData(editData);
        setIsLoadEditPage(true);
        console.log("detailData: "+ detailData);
   }
    console.log("TicketList data :"+ ticketsData);
    return (
        <div>
            <table>
                <tr>
                    <th>Subject</th>
                    <th>Desc</th>
                    <th>Email</th>
                    <th>AssignedTo</th>
                    <th>Status</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                {ticketsData.map((ticket, key) => {
                    console.log("data.map.val --> : " + ticket);
                    return (
                        <tr key={key}>
                            <td>{ticket.subject}</td>
                            <td>{ticket.desc}</td>
                            <td>{ticket.email}</td>
                            <td>{ticket.assignedTo}</td>
                            <td>{ticket.status}</td>
                            <td><button type="button"  style={{color:"blue"}} onClick = {()=>handleEditTicket(ticket)}>Edit</button></td>
                            <td><button type="button" style={{color:"red"}} onClick = {()=>handleDelelete(ticket.subject)}>Delete</button></td>
                        </tr>
                    )
                }
                )}
                {isLoadEditPage?<TicketDetail detailData={detailData } /> : null}
            </table>
        </div>
    )
}
export default TicketList;