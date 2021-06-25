import './App.css';
import Login from './components/Login';
import Navbar from './components/Navbar';
import { Link } from "react-router-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Navbar />

<div className="app">
    <div className="app__body">
      <Router>
        {/* <Switch> */}
        <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
        {/* <Route exact path="/" component={HomePage} /> */}
        <Route path="/login" component={Login} />
      </div>
        {/* </Switch> */}
      </Router>
    </div>
</div>
</div>
);
}

export default App;
