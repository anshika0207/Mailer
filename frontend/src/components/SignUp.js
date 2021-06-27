import { render } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import axios from "./axios";
import "./SignUp.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { Button } from "@material-ui/core";
import MailOutlinedIcon from "@material-ui/icons/MailOutlined";
import { Avatar, IconButton } from "@material-ui/core";
import { useHistory } from "react-router-dom";


var userIsRegistered = true;

function SignUp() {
  const [name, setname] = useState("");
  const [stateOfForm, setstateOfForm] = useState("");
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [confirm, setconfirm] = useState("");

  useEffect(() => {
    setstateOfForm(false);
  }, []);
  const signupuser = async (event) => {
    event.preventDefault();

    let res = await axios.post("/signup", {
      name: name,
      username: username,
      password: password,
      confirm: confirm,
    });

    let data = res.status;


    if(data === 200){
      alert(data);
      routeChange();
      // alert('email already exists!')
    }
    // else{
    //   alert("its going here")
    //   routeChangeForNotFound();
    // }

    setname("");
    setusername("");
    setpassword("");
    setconfirm(""); 
  };
  const history = useHistory();

  const routeChange = () =>{ 
    let path = `/`; 
    history.push(path);
  }
  // const routeChangeForNotFound = () =>{ 
  //   let path = `/`; 
  //   history.push(path);
  // }

  return (
    <div>
      <Navbar registeration={userIsRegistered} />
      <form action="" className="signup__form app__sign" onSubmit={signupuser}>
        <input
          type="text"
          onChange={(event) => setname(event.target.value)}
          placeholder="Enter your name"
          value={name}
        />

        <input
          type="email"
          onChange={(event) => setusername(event.target.value)}
          placeholder="Enter email"
          value={username}
        />

        <input
          type="text"
          onChange={(event) => setpassword(event.target.value)}
          value={password}
          placeholder="Enter password"
        />

        <input
          type="text"
          onChange={(event) => setconfirm(event.target.value)}
          value={confirm}
          placeholder="Confirm password"
        />

        <Button type="submit" className="btnReact">
          Sign Up
        </Button>
        
 
      </form>
    </div>
  );
}

export default SignUp;
