import React, { useState } from "react";

const NameFull=()=>{

    const [data , setData]=useState({

        FirstName:"",
        LastName:""
    })

const [FullName , setFullName] = useState('')
const {FirstName , LastName }=data;

const change=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
}
const dispaly = (e) =>{
    e.preventDefault();
setFullName("WELCOME TO  "+FirstName+""+LastName);
}
return(
    <>
<div>
<form onSubmit={dispaly}>
<label>ENTER YOUR FIRST NAME :</label>
<input type="text" name="FirstName" value={FirstName} onChange={change} placeholder="ENTER FIRST NAME "/><p></p>
<label>ENTER YOUR LAST NAME :</label>
<input type="text" name="LastName" value={LastName} onChange={change} placeholder="ENTER LAST NAME "/><p></p>
SUBMIT :<input type="submit" placeholder="PRINT FULLNAME "/>
</form>
</div>
<div>
<h1>FIRST NAME : {FirstName}</h1>
<h1> LAST NAME : {LastName}</h1>
<h1>FULL NAME :  {FullName}</h1>
</div>
</>);

}
export default NameFull;