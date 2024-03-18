import React, { useEffect ,useState } from "react";
const Effect = ()=>
{
const [count , setCount]=useState(0);
const [count1 , setCount1]=useState(10);

const handleIncrement=()=>{
    setCount(count+1);
}
const handleDecerment=()=>{
    setCount1(count1-1);
}

useEffect(()=>{
    console.log("FIRST USE EFFECT IS RUNNING ");
},[count]);
useEffect(()=>{
    console.log("SECOND USE EFFECT IS RUNNING ");
},[count1]);
return(<>
<div>
<h1>USE EFFECT FIRST APPLICATION </h1>
<button onClick={handleIncrement}>COUNT INCR NUMBERS </button>
<h2>{count}</h2>
</div>
<div>
<button onClick={handleDecerment}>COUNT DECR NUMBERS </button>
<h2>{count1}</h2>
</div>
</>)
}

export default Effect;