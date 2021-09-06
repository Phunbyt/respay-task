import './App.css';
import Login from './components/login'
import Home from './components/home'
import SinglePost from './components/singlePost'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route  path="/singlePost">
      <SinglePost/>
          </Route>
          <Route  path="/home">
      <Home/>
          </Route>
          <Route  path="/">
          <Login/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
