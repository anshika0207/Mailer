import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import './Login.css'
import axios from "./axios";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import MailOutlinedIcon from "@material-ui/icons/MailOutlined";
import { Avatar, IconButton } from "@material-ui/core";
import FacebookIcon from '@material-ui/icons/Facebook';
import { useHistory } from "react-router-dom";
import GitHubIcon from '@material-ui/icons/GitHub';

var userIsRegistered=false;

function Login() {

    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")
    const [stateOfForm, setstateOfForm] = useState("");

    const loginValidation =async (e)=>{
        e.preventDefault();

        let res = await axios.post('/login', {
            username: username,
            password: password
        });

        let data = res.status;
        alert(data);
        if(data === 200){
            routeChange();
        }
        else if(data === 404){
            alert(data);
        }
        else{
            alert(data);           
        }

        setusername("");
        setpassword("");
    }
    const history = useHistory();

    const routeChange = () =>{ 
      let path = `/`; 
      history.push(path);
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
            <MailOutlinedIcon className="mail_btn"/>
          </IconButton>
          <IconButton>
          <FacebookIcon className="fb_btn"/>
          </IconButton>
          <IconButton>

          <GitHubIcon className="github_btn" />
          </IconButton>
        </div>
            </form>

        </div>
    )
}

export default Login
