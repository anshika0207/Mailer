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

  const history = useHistory();

  const routeForLogin = () =>{ 
    let path = `/login`; 
    history.push(path);
  }
  const routeForSignup = () =>{ 
    let path = `/signup`; 
    history.push(path);
  }
  const routeForSchedule = () =>{ 
    let path = `/gotohome`; 
    history.push(path);
  }
  const routeForAdd = () =>{ 
    let path = `/home`; 
    history.push(path);
  }
  const routeForHistory = () =>{ 
    let path = `/history`; 
    history.push(path);
  }
    return (
      <nav class="navbar navbar-expand-lg bg-dark">
        <div class="container-fluid">
          <h1 class="navbar-brand mailer" >Mailer</h1>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">

          {props.registeration?
            <form class="d-flex ">
              <div className="form__btn">
              <button class="btn btn-outline-success navb" type="submit" onClick={routeForSchedule}>Scheduled</button>
              <button class="btn btn-outline-success navb" type="submit" onClick={routeForAdd}>Add Users</button>
              <button class="btn btn-outline-success navb" type="submit" onClick={routeForHistory}>History</button>
              </div>
            </form>
           : 
            <form class="d-flex">
              <div className="form__btn">
              <button class="btn btn-outline-success navb" type="submit" onClick={routeForLogin} >Login</button>
              <button class="btn btn-outline-success navb" type="submit" onClick={routeForSignup}>Sign Up</button>
              </div>
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