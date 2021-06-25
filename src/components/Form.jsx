import React,{useState} from "react";
import Input from "./Input";
import arr from "../array.js";

function callItems(ele){ 
    return <Input 
    key = {ele.id}
    type = {ele.type}
    name = {ele.name}
    />
}


function Form(props){

    var [hovered, set] = useState(false);

    function overbutton(){
        set(true);
    }

    function elsebutton(){
        set(false);
    }

    return (
        <div className="container">
            <h1>Hello</h1>
            <form className="form">
            {arr.map(callItems)}
            {props.IsRegistered ?  <input type="text" name="" placeholder="Confirm Password"></input> : null}


            <button type="submit" 
            onMouseOver={overbutton}
            onMouseOut={elsebutton}  
            style = {{background: hovered ? "black": "white"}}>
                {props.IsRegistered ? "Login" : "Register" }
            </button>
            </form>
        </div>

    );
}

export default Form;

