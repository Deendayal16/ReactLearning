import { useState } from "react";
import TicketList from "./TicketList";
import AddTicketForm from "./TicketAddForm";

const MainPage =()=>{
    //const [pageType, setPageType]= useState("addTicketPage");
    const [pageType, setPageType]= useState("addTicketPage");
    const [tickeFormData, setTicketFormData]= useState([]);

    const addTicket=(addTicketData)=>{
        setTicketFormData([...tickeFormData, addTicketData]);
        setPageType("listPage");
    }
    const deleteTicket=(deleteTicketData)=>{
        let newData = tickeFormData.filter(({ subject }) => subject !== deleteTicketData)
        setTicketFormData(newData);
        setPageType("listPage");
    }
    const editTicket=(editTicketData)=>{
        let newData = tickeFormData.filter(({ subject }) => subject == editTicketData.subject);
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