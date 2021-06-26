import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import './Login.css'
import axios from "./axios";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import MailOutlinedIcon from "@material-ui/icons/MailOutlined";
import { Avatar, IconButton } from "@material-ui/core";
import FacebookIcon from '@material-ui/icons/Facebook';

var userIsRegistered=true;

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
        <Navbar registeration = {userIsRegistered}/>
            <form action="" className="login__form"  onSubmit={loginValidation}>
                <input type="text" onChange={(e)=> setusername(e.target.value)}
                 placeholder="Enter username"
                 value={username}/>
                <input type="text"
                onChange={(e)=> setpassword(e.target.value)}
                value={password}
                placeholder="Enter password"/>

                <Button type="submit" className="btnReact">Login</Button>
                <p className="forgotPass"> <Link>Forgot password?</Link>  </p>
                <div>
          <p>Login with</p>
          <IconButton>
            <MailOutlinedIcon />
          </IconButton>
          <IconButton>
          <FacebookIcon />
          </IconButton>
        </div>
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
