//Import react libraries
import React, { Component } from "react";

//Import style
import '../css/header.css';

//Import images
import logo from "../img/Logohd.jpg"

//Create component
export default class Header extends Component {
    render() {
        return (
            <header className="header">
                <div className="container header-plismi">
                    <a href="/user" className="header-buttons">
                        <i className="fas fa-user logo-user"></i>
                    </a>
                    <a href="/girls" className="header-buttons">
                        <img src={logo} alt="logo_plismi" className="logo"/>
                    </a>
                    <a href="/filter" className="header-buttons">
                        <i className="fas fa-sliders-h logo-filter"></i>
                    </a>
                </div>
            </header>
        )
    }
}