import { useState } from "react";

const CounterPage = ({initialCount=10})=>{
   let [count , setCount] = useState(initialCount);
   let [value, setValue]= useState(0);

    const increment =()=>{
        count= count+1;
        setCount(count);
    }
    const decrement =()=>{
        count= count-1;
        setCount(count);
    }

    // const getvalue =(val)=>{
    //     value = value+val;
    // }

    const handelsubmit =(e)=>{
        e.preventDefault();
        count = parseInt(count)+parseInt(value); 
        setCount(count);
    }

    return(
        <>
      <h1>Count is {count}</h1>

      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <form onSubmit={handelsubmit}>
        <label>Add All</label>
        <input onChange={(e)=>setValue(e.target.value)} />
        <button>Add it!</button>
      </form>
    </>

    )


}
export default CounterPage;