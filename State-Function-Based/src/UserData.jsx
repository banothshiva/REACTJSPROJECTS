import React, { useState } from "react";
const UserData=()=>
{
    const [uid , setUid]=useState(1009);  //INTEGER VALUE
    const [name , setName]=useState("BANOTH SHIVA"); //STRING VALUE
    const [salary , setSalary]=useState(56000.99);
    const [flag , setFlag]=useState(true);  // boolean value 
    const [array , setArray]=useState([100,200,300,400]); // ARRAY OF AN OBJECT 
    const [user , setUser]=useState({"key1":200, "key2":800.20, "key3":300}); // JSON OBJECT DATA 
    return(<>
    <div>
        <h1>USER ID : {uid}</h1>
        <h1>USER NAME : {name}</h1>
        <h1>SALARY :{salary}</h1>
        <h1>{JSON.stringify(flag)}</h1>
    </div>
    <div>{
    array.map((elements,index)=>
        {
            return<h2>{elements}</h2>
        })
    }
    </div>
     <div>
    Object Values are :{user.key1},{user.key2},{user.key3}
    </div> 
    </>)

}
export default UserData;