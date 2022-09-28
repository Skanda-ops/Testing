import React from "react";

function Input(props){
    return(
        <div>
        <input type={props.text} placeholder={props.placeholder}></input><br></br><br></br>
        </div>
    )
}
export default Input;