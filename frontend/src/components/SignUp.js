import React, { useState } from 'react'
import axios from "./axios";
import './SignUp.css';

function SignUp() {

    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const [confirm, setconfirm] = useState("");

    const signupuser= (event) => {
        event.preventDefault();

        axios.post("/signup", {
            username: username,
            passwrod: password,
            confirm: confirm
        });

        setusername("");
        setpassword("");
        setconfirm("");
    }

    return (
        <form action="" className="signup__form app__sign"  onSubmit={signupuser}>
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

            <button type="submit">Login</button>
        </form>
    )
}

export default SignUp
