import { useState } from "react";


const UseStateApp= ()=>{
    let [val , setVal]= useState(0);
    const handleInc=()=>{
        val =val+1;
        setVal(val);
    }
    const handleDecr=()=>{
        val=val-1;
        setVal(val);
    }
    return(
        <section>
            <p>This is Value : {val}</p>
            <button onClick={handleInc}>
                Click More
            </button>
            <button onClick={handleDecr}>
                Click Less
            </button>
        </section>
    );
}
export default UseStateApp;