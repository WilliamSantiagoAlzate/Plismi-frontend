//Import react libraries
import React, { Component } from "react";

//Import style
import '../css/home.css';

//Import images
import logo from "../img/Logohd.jpg"

//Create component
export default class Home extends Component {
    render() {
        return (
            <div className="home">
                <img src={logo} alt="logo_plismi" className="logo-home"/>
                <h1>Plismi</h1>
                <h4>Welcome to this magic world</h4>
                <a href="/girls" className="btn btn-light">Discover!</a>
                <a href="/signin" className="btn btn-light">SignIn</a>
                <a href="/signup" className="btn btn-light">SignUp</a>
            </div>
        )
    }
}