import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import './Login.css'
import axios from "./axios";
import { Link } from "react-router-dom";

function Login() {

    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")
    const [stateOfForm, setstateOfForm] = useState("");

    const loginValidation = (e)=>{
        e.preventDefault();

         axios.post('/login', {
            username: username,
            password: password
         });

        setusername("");
        setpassword("");
        setstateOfForm(true);
    }
    return (

        <div className="app__login">
            <form action="" className="login__form"  onSubmit={loginValidation}>
                <input type="text" onChange={(e)=> setusername(e.target.value)}
                 placeholder="Enter username"
                 value={username}/>
                <input type="text"
                onChange={(e)=> setpassword(e.target.value)}
                value={password}
                placeholder="Enter password"/>

                <button type="submit">Login</button>
            </form>
            {stateOfForm && 
        <Link to="/home">
            home
        </Link> 
         }
        </div>
    )
}

export default Login
