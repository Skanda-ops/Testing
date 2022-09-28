import React from "react";
import Input from "./Input";

function Login(){
    return(
        <form className='myForm'>
       <Input 
        type="text"
        placeholder="Username"
       />
       <Input 
        type="password"
        placeholder="Password"
       />
        <button type='submit'>Submit</button>
      </form>
    )
}
export default Login;