const TicketDetail =(props)=>{
    let detailDatava = props.detailDatavar;
    return (
        <div>
            <p><b>Edit the Ticket</b></p>
            <input type="text" value={detailDatava.subject}/>  
            <input type="text" value={detailDatava.desc}/>
            <input type="text" value={detailDatava.email}/>
            <input type="text" value={detailDatava.status}/>
            <input type="text" value={detailDatava.assignedTo}/>
            <input type="submit" className='submitBtn'/> 
            <button className="canclBtn" onClick = {() => props.handleIsLoad(false)}>Cancel</button>
        </div>
    )
}
export default TicketDetail;