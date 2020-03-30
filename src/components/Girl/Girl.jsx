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
                    <h2>{this.props.Data.name}</h2>
                    <p>
                        <strong>Height: </strong> 
                        {this.props.Data.height}
                    </p>
                    <p>
                        <strong>Mass: </strong> 
                        {this.props.Data.mass}
                    </p>
                    <p>
                        <strong>Hair color: </strong> 
                        {this.props.Data.hair_color}
                    </p>
                    <p>
                        <strong>Skin color: </strong> 
                        {this.props.Data.skin_color}
                    </p>
                    <p>
                        <strong>Eye color: </strong>
                        {this.props.Data.eye_color}
                    </p>
                    <a className="btn btn-outline-danger" href="#">
                        Contact
                    </a>
                </div>

            </div>
        )
    }
}