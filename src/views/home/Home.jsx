//Import react libraries
import React, { Component } from "react";

//Import style
import './Home.css';

//Import images
import logo from "../../images/Logohd.jpg"

//Create component
export default class Home extends Component {
    render() {
        return (
            <div className="home">
                <img alt="logo_plismi" className="logo-home" src={logo}/>
                <h1>Plismi</h1>
                <h4>Welcome to this magic world</h4>
                <a className="btn btn-light btn-home" href="/girls">
                    Discover!
                </a>
                <a className="btn btn-light btn-home" href="/signin">
                    SignIn
                </a>
                <a className="btn btn-light btn-home" href="/signup">
                    SignUp
                </a>
            </div>
        )
    }
}