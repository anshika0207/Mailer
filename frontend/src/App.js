import './App.css';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Main from './components/Main';
import SignUp from './components/SignUp';
import Home from './components/Home';
import axios from './components/axios'
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import {Redirect} from 'react-router-dom';

import {
  BrowserRouter as Router,
  Route,Switch
} from "react-router-dom";
import HomepageInfo from './components/HomepageInfo';

var userIsRegistered = false;

function App() {
  const [maildetails, setMaildetails] = useState([]);

  useEffect(() => {
      axios.get('/mailDetails').then((response)=>{
          setMaildetails(response.data);
          console.log("sent...");
      })
  }, []);

  return (
    <div className="App">
      {/* <Navbar /> */}

      <Router >
        <Route exact path="/" >
        <Navbar registeration = {userIsRegistered}/>
        <Main />
        </Route>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/home" component={Home} />

        <Route path="/gotohome">
        <HomepageInfo maildetails  = {maildetails}/>
        </Route>
      </Router>
</div>
);
}

export default App;
