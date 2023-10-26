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
   const handleEditTicket =(editData)=>{
        const { editTicket } = props;
        editTicket(editData);
        setTicketDetailData(editData);
        setIsLoadEditPage(true);
   }
   const handleIsLoad =(isShow)=>{
    setIsLoadEditPage(isShow);
   }
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
                    return (
                        <tr key={key}>
                            <td>{ticket.subject}</td>
                            <td>{ticket.desc}</td>
                            <td>{ticket.email}</td>
                            <td>{ticket.assignedTo}</td>
                            <td>{ticket.status}</td>
                            <td><button  className="submitBtn" onClick = {()=>handleEditTicket(ticket)}>Edit</button></td>
                            <td><button  className="canclBtn" onClick = {()=>handleDelelete(ticket.subject)}>Delete</button></td>
                        </tr>
                    )
                }
                )}
                {isLoadEditPage?<TicketDetail ticketData={ticketDetailData} isLoadEditPage={setIsLoadEditPage} /> : null}
            </table>
        </div>
    )
}
export default TicketList;