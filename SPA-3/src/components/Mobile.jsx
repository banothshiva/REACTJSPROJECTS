import React from "react";
import {Link , Outlet} from 'react-router-dom';
 const Mobile=()=>{
    return(<>
    <h1>Welcome to the Electronics services </h1>
    <Link to="mobile/iphone" style={{marginRight:100}}>IPHONE</Link>
    <Link to="mobile/vivo" style={{marginRight:100}}>VIVO</Link>
    <Link to="mobile/samsung" style={{marginRight:100}}>SAMSUNG</Link><p></p>
    <br></br><br></br>
    <Outlet></Outlet>
    </>);
 }
 export default Mobile;