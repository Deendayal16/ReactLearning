import { useState } from "react";
import TicketList from "./TicketList";
import AddTicketForm from "./TicketAddForm";

const MainPage =()=>{
    const [pageType, setPageType]= useState("addTicketPage");
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
        <div style={{ textAlign: "left", background: "lightgreen" }}>
            <section>
                <p><b>This is Ticket Home Page</b></p>
                <button type="button" onClick={()=>setPageType("addTicketPage")} style={{color:"blue"}}>Add Tickets</button>
                {/* <button type="button">Delete Tickets</button> */}
                <button type="button" onClick={()=>setPageType("listPage")} style={{color:"blue"}}>View Tickets</button>
                {pageType==="addTicketPage" && <AddTicketForm addTicket={addTicket}/>}
                {/* {iShowViewForm && <TicketList/>} */}
                {pageType==="listPage" && <TicketList formData={tickeFormData} deleteTicket={deleteTicket} editTicket={editTicket} />} 
             </section>
        </div>
    );    
}
export default MainPage;