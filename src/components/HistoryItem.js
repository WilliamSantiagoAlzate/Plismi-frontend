//Import react libraries
import React, { Component } from "react";

//Import images
import logo from "../img/girl.jpg"

//Create component
export default class HistoryItem extends Component {
    render() {
        return (
            <div className="row mb-2 border p-2">
                <div className="col-md-6">
                    <img src={logo} alt="logo" className="w-100"/>
                </div>
                <div className="col-md-6">
                    <h2>Nombre</h2>
                    <p>Contenido</p>
                    <a href="#" className="btn btn-outline-danger">Contactar</a>
                </div>
            </div>       
        )
    }
}