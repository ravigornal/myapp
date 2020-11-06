import React from 'react';
import logo from './logo.svg';
import './App.css';
import List from '../src/components/GridAndList'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from 'react-router-dom';
import GridAndList from '../src/components/GridAndList';
import Login from './components/LoginRegistration/LoginReg';
import FullDetails from './components/FullDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/"  component={Navbar}/>
        <Route path="/" exact component={GridAndList}  /> 
        <Route path="/login" exact component={Login} />
        <Route path="/details/:id" exact component={FullDetails}/>
</Router>
    </div>
  );
}

export default App;
