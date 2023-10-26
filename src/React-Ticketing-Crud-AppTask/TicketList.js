import { useState } from "react";
import TicketDetail from "./TicketDetail";

const TicketList=(props)=>{
   const ticketsData = props.formData;
   const [ticketDetailData , setTicketDetailData]= useState([]);
   const [isLoadEditPage , setIsLoadEditPage]= useState(false);

    const handleDelelete =(deleteData)=>{
        const { deleteTicket } = props;
        deleteTicket(deleteData);
        setIsLoadEditPage(false);
    };
    const handleEditPage=(editData)=>{
        setTicketDetailData(editData);
        setIsLoadEditPage(true);
    }
   const handleEditTicket =(editData)=>{
        const { editTicket } = props;
        editTicket(editData);
        console.log("handleEditTicket id +  sub : "+ editData.id +" "+ editData.subject);
   }
   const handleIsLoad =(isShow)=>{
    setIsLoadEditPage(isShow);
   }
    return (
        <div>
            <table>
                <tr>
                    <th>id</th>
                    <th>Subject</th>
                    <th>Desc</th>
                    <th>Email</th>
                    <th>AssignedTo</th>
                    <th>Status</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                {ticketsData.map((ticket, key) => {
                    return (
                        <tr key={key}>
                            <td>{ticket.id}</td>
                            <td>{ticket.subject}</td>
                            <td>{ticket.desc}</td>
                            <td>{ticket.email}</td>
                            <td>{ticket.assignedTo}</td>
                            <td>{ticket.status}</td>
                            <td><button  className="submitBtn" onClick = {()=>handleEditPage(ticket)}>Edit</button></td>
                            <td><button  className="canclBtn" onClick = {()=>handleDelelete(ticket)}>Delete</button></td>
                        </tr>
                    )
                }
                )}
                {isLoadEditPage?<TicketDetail ticketData={ticketDetailData} isLoadEditPage={setIsLoadEditPage} handleEditTicket={handleEditTicket} /> : null}
            </table>
        </div>
    )
}
export default TicketList;