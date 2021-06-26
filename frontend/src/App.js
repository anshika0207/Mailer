import './App.css';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Main from './components/Main';
import SignUp from './components/SignUp';
import Home from './components/Home';
import { Link } from "react-router-dom";
import {
  BrowserRouter as Router,
  Route,Switch
} from "react-router-dom";

var userIsRegistered = false;

function App() {
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
      </Router>
</div>
);
}

export default App;
