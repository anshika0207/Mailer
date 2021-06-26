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
import RandomHome from './components/RandomHome';

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
<<<<<<< HEAD
        <Route path="/home" component={RandomHome} />
=======
        <Route path="/home" component={Home} />
>>>>>>> bdaa700eaedab8d60a16503b51d093e7ce97b81a
      </Router>
</div>
);
}

export default App;
