import { useState, useEffect, useRef } from 'react';
import './Ticket.css'

 const AddTicketForm = (props)=> {
    const [subject, setSubject]= useState("");
    const [desc, setDesc]= useState("");
    const [email, setEmail]= useState("");
    const [assignedTo , setAssignTo]= useState("Un-Assigned");
    const [status , setStatus]= useState("Open");
    const [errors, setError]=useState({});
    const [isFormValid, setIsFormValid]= useState(false);
    // //Trigger form validation when subject, email
   // const firstRender =useRef(false);
   // const firstupdate = useref(true);
    // useEffect(()=>{
    //     console.log("useEffect-->");
    //     validateForm(subject, email); 
    // },[subject,email]);
    const handleSubjectChange=(sub)=>{
        setSubject(sub);
        validateForm(subject, email);
    }
    const handleEmailChange=(eml)=>{
        setEmail(eml);
        validateForm(subject, email);
    }
    const onsubmit=(e)=>{
        e.preventDefault();
        validateForm(subject, email);
        if(isFormValid){
            const { addTicket } = props;
            let arrrData = {subject,desc,email,assignedTo,status};
            addTicket(arrrData);
        }else{
            console.log("There are some validation failed");  
        }
    }

    const validateForm = (subject,email)=>{
        let errors = {};
        if(!subject){
            errors.subject = 'Subject is required';
        }else{
            if(subject.length<2){
                errors.subject = 'Please enter atleast 3 chars';  
            }
            if(subject.length>50){
                errors.subject = 'Subject leangth should be less than 50 chars';  
            }
        }
        if (!email) { 
            errors.email = 'Email is required'; 
        } else {
            if(!/\S+@\S+\.\S+/.test(email)){
                errors.email = 'Invalid email Id';  
            }
        }
        setError(errors);
        setIsFormValid(Object.keys(errors).length === 0);
    }
    const STATUS_NAMES = ["Open","Closed","In-Progress","On-Hold","Analysis"];
    const OWNER_NAMES = ["Bruce","Ashu","Deen","Gowtham","Ashwin","Un-Assigned"]; 
    return (
        <div id="TicketApp">
            <form onSubmit={onsubmit} className='inputContainer'>
                <label>Subject :   
                    <input type="text" placeholder='Subject' onChange={(e)=>handleSubjectChange(e.target.value)} value={subject}/><br/>
                </label>
                {errors.subject?<p style={{color: "red"}}>{errors.subject}</p>:null}
                <label>Description : 
                        <input type="text" placeholder='Desc' onChange={(e)=> setDesc(e.target.value)} value={desc}/><br/>
                </label>
                <label>Enter email :
                        <input type="email" placeholder="Email" onChange={(e)=> handleEmailChange(e.target.value)} value={email} /><br/>
                </label>
                {errors.email?<p style={{color: "red"}}>{errors.email}</p>:null}
                <label>Assigne To : 
                    <select className='selectcls' onChange={(e)=>setAssignTo(e.target.value)} defaultValue={assignedTo}>
                        {OWNER_NAMES.map((name, index) => <option key={index}>{name}</option>)}
                    </select>
                </label>
                    <br/>
                <label>Status : 
                     <select className='selectcls' onChange={(e)=> setStatus(e.target.value)} defaultValue={status} >
                          {STATUS_NAMES.map((name, index)=><option key={index}>{name}</option>)} 
                    </select>
                </label><br/>
                    < input type="submit" className='submitBtn'></input>
            </form>
        </div>
    );
    }
    
export default AddTicketForm;
