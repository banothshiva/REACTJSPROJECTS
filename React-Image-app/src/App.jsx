import React from "react";
import night  from './1.jpg';
import sky from './2.jpg';
import './App.css'
const App=()=>{
  return(
  <>
  <body  className="img1">
    <div>
      <h1 id="h1">HELLO REACT IMAGE APPLICATION </h1>
        <p id="h1">A React component for displaying different types of images,
        including network images, static resources, temporary local images,
        and images from local disk, such as the camera roll.</p>
        <img src={night} alt="night" title="SkyWorld" width="500" height={"300"}></img>
        <img src={sky} alt="sky" title="SkyWorld!" width="500" height="300"></img>
  </div>

<div className="img2">
  <h1 id="h1">LOGIN FORM !</h1>
  <label id="l1">USERNAME :</label>
  <input type="text" name="USERNAME" ></input><p></p>
  <label id="l1">PASSWORD :</label>
  <input type="password" name="password"></input><p></p>
  <label id="l1">SUBMIT :</label>
  <input type="submit" value="LOGIN"/>
</div>
  </body>
  </>
  );

}
export default App;