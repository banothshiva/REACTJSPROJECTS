import { useState } from "react";
const Register=()=>
{
    const [data , setData]=useState({
        name:"",
        password:"",
        email:"",
        gender:"",
        city:"",
        state:"",
        address:"",
        gender:"",
        mobileNumber:"",
        hobbies:""
    });
const [result , setResult]=useState("")
{
    const {name}=data;
    const {password}=data;
    const {email}=data;
    const {gender}=data;
    const {city}=data;
    const {state}=data;
    const {address}=data; 
    const {mobileNumber}=data;
    const {hobbies}=data;

const change=(e)=>
{
       setData({...data,[e.target.name]:e.target.value})
     
}
const dispaly=(e)=>
{
        e.preventDefault();
}
return(
    <>
   <center>
    <body>
        <form>
        <h1>NEW USER REGISTRATION FORM </h1>
   <tr> 
        <td> NAME : </td>
        <td><input type="text" name="name" value={name} 
        onChange={change} placeholder="NAME"></input></td>
    </tr>
   <tr> 
        <td> PASSWORD : </td>
        <td> <input type="password" name="password"
        value={password}  onChange={change} placeholder="PASSWORD"></input>
         </td>
    </tr>
    <tr>
        <td>EMAIL  : </td>
        <td><input type="email" name="email" value={email} onChange={change}
        placeholder="EMAIL"></input>
        </td>
    </tr>
    <tr> 
        <td>ADDERSS :</td>
        <td> <input type="text" name="address" value={address}
        onChange={change} placeholder="ADDERSS"></input></td>
</tr> 
 <tr> 
        <td> MOBILE NUMBER : </td>
        <td><input type="text" name="mobileNumber" value={mobileNumber} 
        onChange={change} placeholder="MOBILE NUMBER"></input></td>
</tr>
<tr>
        <td>GENDER :</td>
        FEMALE : <input type="radio" name="gender" value="FEMALE"  onChange={change}/>
        MALE :  <input type="radio" name="gender" value="MALE"   onChange={change}/>
</tr>
<tr> 
      <td><label>CITY :</label></td>  
      <td>  
      <select name="city" value={city} onChange={change}>
      <option value="HYDERABAD">HYDERABAD</option>
      <option value="DUBAI">DUBAI</option>
      <option value="GOA">GOA</option>
        </select></td>  
</tr>
<tr> 
        <td>STATE :</td> 
        <td><input type="text" name="state" value={state}
        onChange={change} placeholder="STATE"></input>
        </td>
</tr>
<tr>
            <td>HOBBIES :</td>
            <td>
           GAMING :<input type="radio" name="hobbies" value="Gaming" onChange={change}></input>   
           PROGRAMMING :<input type="radio" name="hobbies" value="Programming" onChange={change}></input>  
           </td>    
</tr> 

<tr> 
    <td></td>
</tr>
   <td>SUBMIT :
  <input type="submit" onClick={dispaly} value="REGISTER"/>
  </td>
    </form>
    </body>
    </center>
    <h2> MY NAME:{name}</h2>
    <h2>PASSWORD:{password}</h2>
    <h2>EMAIL:{email}</h2>
    <h2>ADDRESS:{address}</h2>
    <h2>MOBILE NUMBER:{mobileNumber}</h2>
    <h2>Gender:{gender}</h2>
    <h2>STATE:{state}</h2>
    <h2>CITY:{city}</h2>
    <h2>HOBBIES:{hobbies}</h2>
    </>);
}
}
export default Register;