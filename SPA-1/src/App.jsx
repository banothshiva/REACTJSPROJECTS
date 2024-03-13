import React from "react";
import {Link,Routes,Route} from 'react-router-dom';
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Register from './components/Register'
import './App.css';
const App=()=>{
 return(<>
  <Link to="/" style={{marginRight:100}}>HOME!</Link>
  <Link to="/about" style={{marginRight:100}}>ABOUT!</Link>
  <Link to="/contact" style={{marginRight:100}}>CONTACT!</Link>
  <Link to="/login" style={{marginRight:100}}>LOGIN!</Link>
  <Link to="/register" style={{marmarginRightginRight:100}}>REGISTER!</Link>
<p></p>
<Routes>
<Route path="/" element={< Home/>}></Route>
<Route path="/about" element={<About/>}></Route>
<Route path="/contact" element={<Contact/>}></Route>
<Route path="/login" element={< Login/>}></Route>
<Route path="/register" element={<Register />}></Route>
</Routes>
  </>);
}
export default App;