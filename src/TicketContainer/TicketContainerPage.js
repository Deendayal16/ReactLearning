import { useState } from "react";
import TicketList from "./TicketList";
import AddTicketForm from "./TicketAddForm";

const MainPage =()=>{
    //const [pageType, setPageType]= useState("addTicketPage");
    const [pageType, setPageType]= useState("");
    const [tickeFormData, setTicketFormData]= useState([]);

    const addTicket=(addTicketData)=>{
        console.log("ticketData : "+ addTicketData);
        setTicketFormData([...tickeFormData, addTicketData]);
        console.log("tickeFormData---> : "+ tickeFormData);
        setPageType("listPage");
    }
    const deleteTicket=(deleteTicketData)=>{
        console.log("Delete ticketData : "+ deleteTicketData);
        let newData = tickeFormData.filter(({ subject }) => subject !== deleteTicketData)
        console.log(" ALL Tickt newItems : "+ newData);
        setTicketFormData(newData);
        setPageType("listPage");
    }
    const editTicket=(editTicketData)=>{
        console.log(" editTicket : "+ editTicketData);
        let newData = tickeFormData.filter(({ subject }) => subject == editTicketData.subject);
        console.log("EditNewData- : "+ newData[0].subject);
    }

    return(
        <div  className="ticketcontApp">
                <div>
                    <h1><b>This is ticket home page</b></h1>
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