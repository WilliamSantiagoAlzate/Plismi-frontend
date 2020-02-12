//Import react libraries
import React, { Component } from "react";

//Import style
import '../css/sign.css';

//Import images
import logo from "../img/Logohd.jpg"

//Create component
export default class SignIn extends Component {
    render() {
        return (
            <div className="sign">
                <div className="left-sign bg-secondary">
                    
                </div>
                <div className="right-sign">
                    <div className="text-center w-100">
                        <div>
                            <img src={logo} alt="logo_plismi" className="logo-home"/>
                            <h1>Plismi</h1>
                        </div>
                        <div className="card-body">
                            <form action="/signin" method="POST">
                                <div className="form-group">
                                    <input type="email" className="form-control" name="email" placeholder="Email" autoFocus/>
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" name="password" placeholder="Password"/>
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-light btn-block">
                                        SigIn
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}