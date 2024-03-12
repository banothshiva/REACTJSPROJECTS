import React from "react";
function Login(){
return(
<React.Fragment>
<h1>WELCOME TO THE LOGIN APPLICATION</h1>
User Id :<input type="text" name="id"  max={22} required></input><p></p>
User Name : <input type="text" name="name" max={15} required></input><p></p>
<input type="submit" value="Login" max={22} required></input><p></p>
</React.Fragment>
   )
}

export default Login