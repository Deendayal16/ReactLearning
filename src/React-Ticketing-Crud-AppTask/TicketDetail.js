const TicketDetail =(props)=>{
    let ticketData = props.ticketData;
    return (
        <div>
            <p><b>Edit the Ticket</b></p>
            <input type="text" value={ticketData.subject}/>  
            <input type="text" value={ticketData.desc}/>
            <input type="text" value={ticketData.email}/>
            <input type="text" value={ticketData.status}/>
            <input type="text" value={ticketData.assignedTo}/>
            <button  className='submitBtn'>Save</button> 
            <button className="canclBtn" onClick = {() => props.isLoadEditPage(false)}>Cancel</button>
        </div>
    )
}
export default TicketDetail;
