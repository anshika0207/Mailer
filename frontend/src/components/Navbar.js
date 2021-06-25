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

function Navbar() {
    return (
        <div className="app__navbar">
              <ul  className="navbar__route">
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/signup">Sign Up</Link></li>
        </ul>
        </div>
    )
}

export default Navbar
