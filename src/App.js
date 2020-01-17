import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route, Redirect,Switch} from 'react-router-dom';
import EmployeeDetails from './components/employeedetails'
import Register from './components/register'
import Home from './components/home'
import Update from './components/editEmployee'

function App() {
  return (
    <div className="App">

<Router>
    <div>
      <Switch>
      <Route path="/home" component={Home} />
      <Route path="/register" component={Register} />
      <Route path="/home/register" component={Register} />
      <Route path="/update/:object" component={Update} />
      </Switch>
    </div>
  </Router>
  
    </div>
  );
}

export default App;
