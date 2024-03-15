import { useState } from "react";

const Login=()=>{
const [data , setData]=useState({
userName:"",
password:""
 })
const [result , setResult]=useState();
const {userName}=data;
const {password}=data;


const change=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
}
const dispaly =(e)=>{
    e.preventDefault();
    if(result)
    {
    setResult("LOGIN SUCCESSFULLY .........")
       }
    else
    {
    setResult(" YOUR LOGIN FAILED GIVE SOME VALID DATA ")
  }
}
return(
    <>
    <center>
<form onSubmit={dispaly}>
<h1>NEW USER LOGIN HERE </h1>
<label> USER NAME :</label><input type="text" name="userName" value={userName} onChange={change} placeholder=" ENTER USER NAME"/><p></p>
<label> PASSWORD :</label><input type="text" name="password" value={password} onChange={change} placeholder="ENTER PASSWORD"/><p></p>
<label>SUBMIT :</label><input type="submit" value="LOGIN"/>
</form>
<h1>{userName}</h1> 
<h1>{password}</h1> 
<h5>{result}</h5> 
 </center>
</>);
}
export default Login;