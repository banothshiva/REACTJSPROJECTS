import React, { useState } from "react";

function useCustomCounter()
{
    const [count , setCount]=useState(10);
    const Increment = ()=>
    {
        setCount(count+1);
    }
    return
    {
        count,
        Increment

    }

}

export default useCustomCounter ;