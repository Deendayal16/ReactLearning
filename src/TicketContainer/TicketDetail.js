const TicketDetail =(props)=>{
    return (
        <div>
            <p><b>Ticket Details View</b></p>
            <p>This is Subject : {props.subject}</p>
            <p>This is Description : {}</p>
            <p>This is Email : {}</p>
            <p>This is Status : {}</p>
            <p>This is Assigned To : {}</p>
        </div>
    )
}
export default TicketDetail;