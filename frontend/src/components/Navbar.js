import React from 'react'
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import {
    BrowserRouter as Router,
    Route
  } from "react-router-dom";
import Login from './Login';
import SignUp from './SignUp';
import './Navbar.css'

function Navbar(props) {

    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-dark">
        <div class="container-fluid">
          <h1 class="navbar-brand" >Mailer</h1>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">

          {props.registeration? null : 
            <form class="d-flex">
              <button class="btn btn-outline-success" type="submit" ><Link to="/login">Login</Link></button>
              <button class="btn btn-outline-success" type="submit"><Link to="/signup">Sign Up!</Link></button>
            </form>
          }

          </div>
        </div>
      </nav>
    )
}

export default Navbar;









  //////////////// incase needed later ///////////


        // <div className="app__navbar">
        //       <ul  className="navbar__route">
        //   
        //   <li></li>
        // </ul>
        // </div>