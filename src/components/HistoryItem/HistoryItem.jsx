//Import react libraries
import React, { Component } from "react";

//Import images
import logo from "../../images/girl.jpg"

//Create component
export default class HistoryItem extends Component {
    render() {
        return (
            <div className="row mb-2 border p-2">
                
                {/* Picture girl*/}
                <div className="col-md-6">
                    <img alt="logo" className="w-100" src={logo}/>
                </div>

                {/* Description girl */}
                <div className="col-md-6">
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