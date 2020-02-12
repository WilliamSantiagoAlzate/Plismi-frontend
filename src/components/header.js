//Import react libraries
import React, { Component } from "react";
import { Link } from 'react-router-dom';

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
                    <Link to="/user" className="header-buttons">
                        <i className="fas fa-user logo-user">User</i>
                    </Link>
                    <Link to="/girls" className="header-buttons">
                        <img src={logo} alt="logo_plismi" className="logo"/>
                    </Link>
                    <Link to="/filter" className="header-buttons">
                        <i className="fas fa-sliders-h logo-filter">Filter</i>
                    </Link>
                </div>
            </header>
        )
    }
}