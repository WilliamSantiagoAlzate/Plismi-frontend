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
                    <h2>Name</h2>
                    <p>Content</p>
                    <a className="btn btn-outline-danger" href="#">
                        Contact
                    </a>
                </div>

            </div>
        )
    }
}