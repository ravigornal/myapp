import React from 'react'
// import history from '../../history';
import './LReg.css'
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from 'react-router-dom';

class LoginReg extends React.Component {
    constructor() {
      super();    
      
      this.state = {form: 'login'};   
      
      this.toggle = {
        login: 'register',
        register: 'login'
      };
    }
    
    onSubmit(e) {
      e.preventDefault();
    }
  
    render() {    
      return (
        
        <div className="container">
          <div style={{transform: `translate(${this.state.form === 'login' ? 0 : 250}px, 0px)`}} className="form-div">
            <form onSubmit={this.onSubmit.bind(this)} className="form-class">
              <input placeholder="User Name" type="text"/>  
              {this.state.form === 'login' ? '':<input placeholder="Email" type="text"/> }
              <input placeholder="Password" type="password" />
              {this.state.form === 'login' ? '':<input placeholder="Re-typed password" type="password" />}
            {this.state.form=== 'login' ? <Link to="/login" className="btn btn-primary">Log In</Link> :''}
            {this.state.form=== 'login' ? '' :<Link to="/register" className="btn btn-primary">Register</Link>}  
            </form>
          </div>
          <div style={{transform: `translate(${this.state.form === 'login' ? 0 : -250}px, 0px)`}} className="button-div">
            <p>{this.state.form === 'login' ? 'Do not have an account?' : 'Already a member?'}</p>
            <button onClick={() => {this.setState({form: this.toggle[this.state.form]})}}>{this.toggle[this.state.form]}</button>
          </div>
        </div>
        
      );
    }
  }
  export default LoginReg