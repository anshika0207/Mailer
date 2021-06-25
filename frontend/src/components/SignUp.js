import { render } from '@testing-library/react';
import React, { useState } from 'react'
import axios from "./axios";
import './SignUp.css';
import randomHome from './randomHome';

function SignUp() {

    const [name, setname] = useState("");
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const [confirm, setconfirm] = useState("");

    const signupuser= async (event) => {
        event.preventDefault();

        let res = await axios.post("/signup", {
            name: name,
            username: username,
            password: password,
            confirm: confirm
        })

        let data = res.status;
        alert(data.type);
        if(data === '200'){
            return <randomHome />
        }

        setname("");
        setusername("");
        setpassword("");
        setconfirm("");
    }

    return (
        <form action="" className="signup__form app__sign"  onSubmit={signupuser}>

            <input type="text" onChange={(event)=> setname(event.target.value)}
            placeholder="Enter your name"
            value={name}/>

            <input type="email" onChange={(event)=> setusername(event.target.value)}
            placeholder="Enter email"
            value={username}/>

            <input type="text"
            onChange={(event)=> setpassword(event.target.value)}
            value={password}
            placeholder="Enter password"/>

            <input type="text"
            onChange={(event)=> setconfirm(event.target.value)}
            value={confirm}
            placeholder="Confirm password"/>            

            <button type="submit">Sign Up</button>
        </form>
    )
}

export default SignUp
