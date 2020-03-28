//Import react libraries
import React, { Component } from "react";
import { Link } from 'react-router-dom';

//Import style
import './Header.css';

//Import images
import logo from "../../images/Logohd.jpg"

//Create component
export default class Header extends Component {
    render() {
        return (
            <header className="header">
                <div className="container header-plismi">

                    {/* User button */}
                    <Link className="header-buttons" to="/user">
                        <i className="fas fa-user logo-user"></i>
                    </Link>

                    {/* Girls button */}
                    <Link className="header-buttons" to="/girls">
                        <img alt="logo_plismi" className="logo" src={logo}/>
                    </Link>

                    {/* Filter button */}
                    <Link className="header-buttons" to="/filter">
                        <i className="fas fa-sliders-h logo-filter"></i>
                    </Link>

                </div>
            </header>
        )
    }
}