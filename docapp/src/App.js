import logo from './logo.svg';
import './App.css';
import Signin from './Signin';
import Home from './Home';
import Signup from './Signup';

import { Route, Link,Switch, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
     
     <Router>  
    <div>  
      {/* <h1>React Router Example</h1>   */}
      <Switch>
      <Route exact path="/" component={Signin} />  
      <Route path="/Home" component={Home} />  
      <Route path="/Newuser" component={Signup} />
      </Switch>
    </div>  
  </Router>


    </div>
  );
}

export default App;
