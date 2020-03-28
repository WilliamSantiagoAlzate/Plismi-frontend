//Import react libraries
import React, { Component } from "react";

//Import style
import './Girl.css';

//Import images
import logo from "../../images/girl.jpg"

//Create component
export default class Girl extends Component {
    render() {
        return (
            <div className="girl row" style={this.props.Height}>

                {/* Picture girl */}
                <div className="girl-picture">
                    <img alt="logo" src={logo}/>
                </div>

                {/* Description girl */}
                <div className="girl-description">
                    <h2>Nombre</h2>
                    <p>Contenido</p>
                    <a className="btn btn-outline-danger" href="#">
                        Contactar
                    </a>
                </div>

            </div>
        )
    }
}