import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from 'react-router-dom';

export class Navbar extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light" style={{"backgroundColor":"#D4C9F5"}}>
                <a class="navbar-brand" href="#"></a>
                

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <Link to="/"><a class="nav-link" href="#">Home </a></Link>
                    </li>
                    <li class="nav-item">
                    <Link to="/about"><a class="nav-link" href="#">About Us</a></Link>
                    </li>
                    <li class="nav-item">
                    <Link to="/login"><a class="nav-link" href="#">Log In</a></Link>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>
                    </ul>
                    
                </div>
                </nav>
            </div>
        )
    }
}

export default Navbar
