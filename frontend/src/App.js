import './App.css';
import Login from './components/Login';
import Navbar from './components/Navbar';
import { Link } from "react-router-dom";
import {
  BrowserRouter as Router,
  Route,Switch
} from "react-router-dom";
import SignUp from './components/SignUp';

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Router >
        <Route exact path="/" >
        <Navbar />
        </Route>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
      </Router>
</div>
);
}

export default App;
