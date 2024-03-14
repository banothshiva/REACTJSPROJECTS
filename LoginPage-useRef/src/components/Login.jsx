import { useRef,useState } from "react";
const Login=()=>{
    const userName=useRef();
    const password=useRef();
    const [ msg , setMsg]=useState();
    const [ msg2 , setMsg2]=useState();
    const [ msg3 , setMsg3]=useState();

const LoginPage=()=>{
    if(msg2){
        setMsg2("ENTER USERNAME");
    }
    if(msg3){
        setMsg3("ENTER PASSWORD");
    }
if(userName.current.value=="shiva" && password.current.value=="shiva123")
{
    setMsg("login successfully........");

}
else
{
    setMsg("login failed give some valid credintials .........");
}
}
return(
<>
<div>
USERNAME :<input type="text" ref={userName} placeholder="ENTER USERNAME"/><span>ENTER USERNAME</span><p></p>
PASSWORD :<input type="password" ref={password} placeholder="ENTER PASSWORD"/><span>ENTER PASSWORD</span><p></p>
 <input type="submit" value="LOGIN" onClick={LoginPage}></input> 
</div>
<div>
<h1>{msg}</h1>
</div>
</>);
}
export default Login;