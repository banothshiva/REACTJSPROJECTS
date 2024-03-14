import React from "react";
import Headder from "./components/Headder";
import Body from "./components/Body";
import Footer from "./components/Footer";
import './App.css';
const App=()=>{
  return(<>
  <div>
    <Headder/>
  </div>
  <div>
    <Body />
  </div>
  <div>
    <Footer />
  </div>
  </>)
}
export default App;