import React from "react";
import useCustomCounter from "./Custom";
import useCustom from "./Decrement";

function App()
{
    const data1=useCustomCounter();
     const data2=useCustom();
    return(
    <>
   
    <div>
        <p>{data2.count}</p>
        <button onClick={data2.Decrement}>Decrement</button>
    </div>
    <div>
        <p>{data1?.count}</p>
        <button onClick={data1?.Increment}>Increment</button>
    </div>
    
    </>)
    
}
export default App;