import { render } from '@testing-library/react';
import React, { useEffect, useState } from 'react'
import axios from "./axios";
import './SignUp.css';
import { Link } from "react-router-dom";

function SignUp() {

    const [name, setname] = useState("");
    const [stateOfForm, setstateOfForm] = useState("");
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const [confirm, setconfirm] = useState("");

    useEffect(() => {
        setstateOfForm(false);
    }, [])
    const signupuser= async (event) => {
        event.preventDefault();

        let res = await axios.post("/signup", {
            name: name,
            username: username,
            password: password,
            confirm: confirm
        })

        let data = res.data;
        alert(data.json);

        setname("");
        setusername("");
        setpassword("");
        setconfirm("");
        setstateOfForm(true);
    }

    return (
        <div>

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

        {stateOfForm && 
        <Link to="/home">
            home
        </Link> 
         } 
            </div>
    )
}

export default SignUp
