//Import react libraries
import React, { Component } from "react";

//Import style
import '../css/girl.css';

//Import images
import logo from "../img/girl.jpg"

//Create component
export default class Girl extends Component {
    render() {
        return (
            <div className="girl row" style={this.props.Height}>
                <div className="girl-picture">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="girl-description">
                    <h2>Nombre</h2>
                    <p>Contenido</p>
                    <a href="#" className="btn btn-outline-danger">Contactar</a>
                </div>
            </div>
        )
    }
}