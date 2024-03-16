import { useState } from "react";

function useCustom()
{
    const [count , setCount]=useState(100);
    const Decrement =()=>
    {
        setCount(count-1);
    
    }
    return
    {
        count,
        Decrement
    }
}

export default useCustom;
