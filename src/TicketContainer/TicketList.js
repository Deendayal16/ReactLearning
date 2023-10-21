import { useState } from "react";
import TicketDetail from "./TicketDetail";

const TicketList=(props)=>{
   const ticketsData = props.formData;
   const [detailData , setDetailViewData]= useState([]);
   const [isLoadEditPage , setIsLoadEditPage]= useState(false);

    const handleDelelete =(deleteData)=>{
        const { deleteTicket } = props;
        deleteTicket(deleteData);
        setIsLoadEditPage(false);
    };
   const handleEditTicket =(editData)=>{
        const { editTicket } = props;
        console.log("handleEditTicket : "+ editData);
        editTicket(editData);
        setDetailViewData(editData);
        setIsLoadEditPage(true);
        console.log("detailData: "+ detailData);
   }
   const handleIsLoad =(isShow)=>{
    console.log("handleIsLoad---->"+ isShow);
    setIsLoadEditPage(isShow);
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
                            <td><button  className="submitBtn" onClick = {()=>handleEditTicket(ticket)}>Edit</button></td>
                            <td><button  className="canclBtn" onClick = {()=>handleDelelete(ticket.subject)}>Delete</button></td>
                        </tr>
                    )
                }
                )}
                {isLoadEditPage?<TicketDetail detailDatavar={detailData} handleIsLoad={setIsLoadEditPage} /> : null}
            </table>
        </div>
    )
}
export default TicketList;