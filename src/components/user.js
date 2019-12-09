//Import react libraries
import React, { Component } from "react";

//Import style
import '../css/user.css';

//Create component
export default class User extends Component {
    render() {
        return (
            <div className="user mt-3">
                <div className="text-center justify-content-center">
                    <div className="container col-md-6">
                        <div className="user-picture mb-3">
                            <a href="#"><i class="fas fa-user-circle"></i></a>
                        </div>
                        <form action="">
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <i className="fas fa-user input-group-text"></i>
                                </div>
                                <input type="text" className="form-control" placeholder="Name"/>
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <i className="fas fa-calendar input-group-text"></i>
                                </div>
                                <input type="number" className="form-control" placeholder="Age"/>
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <i className="fas fa-phone input-group-text"></i>
                                </div>
                                <input type="number" className="form-control" placeholder="Phone number"/>
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <i className="fas fa-envelope input-group-text"></i>
                                </div>
                                <input type="email" className="form-control" placeholder="Email"/>
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <i className="fas fa-key input-group-text"></i>
                                </div>
                                <input type="password" className="form-control" placeholder="Password"/>
                            </div>
                            <button className="btn btn-danger btn-lg">
                                Save changes
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}