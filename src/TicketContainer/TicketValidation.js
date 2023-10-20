
const validateEmail = (data) => {
    console.log(data);
    console.log(data);
    //alert("Great Email is Valid!");
}
const validateSubject = (data) => {
    console.log(data);
    //alert("Great Subject is Valid!");
}
const onSubmit=(e)=>{
    console.log(e); 
    console.log(e.target); 
    console.log("subject : " + e.target.subject.value); 
    console.log("desc : " + e.target.desc.value); 
    console.log("email : " + e.target.email.value); 
    console.log("status : " + e.target.status.value); 
    console.log("AssignedTo : " + e.target.owner.value); 
    
    window.confirm("Are You Sure want to Submit ? ")
    
    e.preventDefault();
}
const validateForm=(form)=>{
    let errors={};
    if(!form.subject){
        errors.name = 'Name is required.';
    }
    if (!form.email) { 
        errors.email = 'Email is required.'; 
    }
    return errors;
}


export {validateEmail, validateSubject, onSubmit}