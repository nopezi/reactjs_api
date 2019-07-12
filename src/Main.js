import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./Home";
import Input from "./input";
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap-theme.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
// import About from "./About";
// import Contact from "./Contact";

class Main extends Component{
    render(){
        return(
            <HashRouter>
                <div className="App">
                    <NavLink className="btn btn-outline-secondary" to="/">Home</NavLink>
                    <NavLink className="btn btn-outline-secondary" to="/Input">Tambah</NavLink>
                    <Route exact path="/" component={Home}/>
                    <Route path="/Input" component={Input}/>
                    {/* <Route path="/Contact" component={Contact}/> */}
                </div>
            </HashRouter>
        )
    }
}

export default Main;