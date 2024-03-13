import React, { useState, useRef } from "react";
import './Login.css'
const Login = () => {
  const FirstName = useRef();
  const SecondName = useRef();
  const [msg, setMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const firstNameValue = FirstName.current.value;
    const secondNameValue = SecondName.current.value;
    const fullName = `${firstNameValue} ${secondNameValue}`;
    setMsg(fullName);
  };

  return (
    <>
    <body className="b1">
      <div>
        <label id="l1">FIRST NAME :</label>
        <input id="i1" type="text" ref={FirstName}></input><br></br>
        <label id="l1">SECOND NAME :</label>
        <input  id="i1" type="text" ref={SecondName}></input><br></br>
        <label id="l1">SUBMIT : </label>
        <input  id="i1" type="submit" onClick={handleSubmit} value="PRINT NAME"></input>
      </div>

      <div>
        <h5 id="l1">{msg}</h5>
      </div>
      </body>
    </>
  );
};

export default Login;
