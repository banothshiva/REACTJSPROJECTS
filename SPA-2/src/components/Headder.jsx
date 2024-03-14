import React from "react";
import {Link} from 'react-router-dom';
const Headder=()=>{
    return(<>
    <div>
    <h1 id="h1">WELCOME TO SATHYA TECH !</h1>
    </div>
    <div>
    <Link to='/' style={{marginRight:100}}>HOME!</Link>
    <Link to='/about' style={{marginRight:100}}>ABOUT!</Link>
    <Link to='/contact' style={{marginRight:100}}>CONTACT!</Link>
    <Link to='/login' style={{marginRight:100}}>LOGIN!</Link>
    <Link to='/register' style={{marginRight:100}}>REGISTER!</Link>
    </div>
    </>)
}
export default Headder;