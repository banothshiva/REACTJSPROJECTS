import React from "react";
const Login=()=>{
    return(<>
            <div id="b1">
            <h1> LOGIN PAGE! </h1>
                USER NAME :<input type="text" name="username"/><p></p>
                PASSWORD :<input type="password" name="password"/><p></p>
                SUBMIT : <input type="submit" value="LOGIN"/>
            </div>
            </>);
}
export default Login;