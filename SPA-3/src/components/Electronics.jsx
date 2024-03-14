import React from 'react';
import {Link , Outlet} from 'react-router-dom';
 const Electronics=()=>{
    return(<>
    <h1>Welcome to the Electronics services </h1>
    <Link to="electronics/dell" style={{marginRight:100}}>DELL</Link>
    <Link to="electronics/hp" style={{marginRight:100}}>HP</Link>
    <Link to="electronics/lenovo" style={{marginRight:100}}>LENOVO</Link><p></p>
    <br></br><br></br>
    <Outlet></Outlet>
    </>)
 }
 export default Electronics;