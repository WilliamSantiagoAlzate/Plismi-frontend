//Import react libraries
import React, { Component } from "react";

//Import style
import '../css/sign.css';

//Import images
import logo from "../img/Logohd.jpg"

//Create component
export default class SignUp extends Component {
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
                            <form action="/signup" method="POST">
                                <div class="form-group">
                                    <input type="text" class="form-control" name="name" placeholder="Name" value=""/>
                                </div>
                                <div class="form-group">
                                    <input type="email" class="form-control" name="email" placeholder="Email" value=""/>
                                </div>
                                <div class="form-group">
                                    <input type="password" class="form-control" name="password" placeholder="Password" value=""/>
                                </div>
                                <div class="form-group">
                                    <input type="password" class="form-control" name="confirm_password" placeholder="Confirm password" value=""/>
                                </div>
                                <div class="form-group">
                                    <button type="submit" class="btn btn-light btn-block">SignUp</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}