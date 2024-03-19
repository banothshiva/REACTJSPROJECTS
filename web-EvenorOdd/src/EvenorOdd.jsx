import { useState } from "react"

const EvenorOdd=()=>{
const [data  , setData]=useState({
    number:""
})
const [result , setResult]=useState("")
const {number}=data;
const change = (e)=>{
    setData({...data,[e.target.name]:e.target.value})
}
const dispaly=(e)=>{
e.preventDefault();
if(number % 2 ==0){
    setResult("GIVEN NUMBER EVEN ...")
}
else{
    setResult("GIVEN NUMBER ODD");
}
}
return(
    <>
    <body className="cls1">
    <form onSubmit={dispaly}>
    <label>ENTER NUMBER :</label>
    <input type="text" name="number" value={number} onChange={change} placeholder="ENTER NUMBER"></input><p></p>
    <input type="submit" value="check" ></input>
    </form>
    <h1>{result}</h1>
    </body>
    </>);
}

export default EvenorOdd; 