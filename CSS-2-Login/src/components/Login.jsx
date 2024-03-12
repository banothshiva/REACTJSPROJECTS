import React from "react";
import './Login.css';
const Login =()=>{
    return(
    <>
    <body className="bg1">
    <h1 id="header1">Login Form </h1>
    <label id="labal1">USER NAME :</label>
    <input type="text" id="input1" name="userName"/><br></br>
    <label id="labal1">PASSWORD :</label>
    <input type="text" id="input1" name="password"/><br></br>
    <label id="labal1">SUBMIT :</label> 
     <input type="submit" name="LOGIN" className="button1"/><br></br>
    </body>
    </>
    )
}
export default Login;