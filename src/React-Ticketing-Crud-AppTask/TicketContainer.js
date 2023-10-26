import { useState } from "react";
import TicketList from "./TicketList";
import AddTicketForm from "./TicketAddForm";

const MainPage =()=>{
    const [pageType, setPageType]= useState("addTicketPage");
    const [tickeFormData, setTicketFormData]= useState([]);

    const addTicket=(addTicketData)=>{
        setTicketFormData([...tickeFormData, addTicketData]);
        setPageType("listPage");
    }
    const deleteTicket=(deleteTicketData)=>{
        let newData = tickeFormData.filter(({ id }) => id != deleteTicketData.id);
        setTicketFormData(newData);
        setPageType("listPage");
    }
    const editTicket=(editTicketData)=>{
        let newData = tickeFormData.filter(({ id }) => id != editTicketData.id);
        setTicketFormData([...newData, editTicketData]);
    }

    return(
        <div  className="ticketcontApp">
                <div>
                    <h1>This is Your Ticket Home Page, Submit your first Ticket</h1>
                </div>
                <button  className='buttonmncls' onClick={()=>setPageType("addTicketPage")}>Add Tickets</button>
                <button  className="buttonmncls" onClick={()=>setPageType("listPage")}>View Tickets</button>
                {pageType==="addTicketPage" && <AddTicketForm addTicket={addTicket}/>}
                {/* {iShowViewForm && <TicketList/>} */}
                {pageType==="listPage" && <TicketList formData={tickeFormData} deleteTicket={deleteTicket} editTicket={editTicket} />} 
             </div>
    );    
}
export default MainPage;