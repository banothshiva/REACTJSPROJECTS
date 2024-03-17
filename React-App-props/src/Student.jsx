import React from "react";

const Student =(props)=>{
    return(
<>
<h1>MY ROLL NO {props.rollNo}</h1>
<h2>MY NAME IS {props.name}</h2>
<h3>MY FEES IS {props.fees}</h3>
<p>ARRAY VALUES ARE {props.arr}</p>

</>

    )
}
export default Student