import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import './Login.css'
import axios from "./axios";

function Login() {

    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")

    const loginValidation = (e)=>{
        e.preventDefault();

         axios.post('/login', {
            username: username,
            password: password
        },
        alert("clicked on login"));


        setusername("");
        setpassword("");
    }
    return (

        <div className="app__login">
            <form action="" className="login__form">
                <input type="text" onChange={(e)=> setusername(e.target.value)}
                 placeholder="Enter username"
                 value={username}/>
                <input type="text"
                onChange={(e)=> setpassword(e.target.value)}
                value={password}
                placeholder="Enter password"/>

                <button type="submit" onClick={loginValidation}>Login</button>
            </form>
        </div>
    )
}

export default Login
