//Import react libraries
import React, { Component } from "react";

//Import style
import '../css/user.css';

//Import components
import Pay from "./Pay";
import Settings from "./Settings";

//Create component
export default class User extends Component {
    render() {
        return (
            <div className="user mt-5">
                {/* User data */}
                <div className="text-center justify-content-center">
                    <div className="container col-md-4">
                        <div className="user-picture mb-3">
                            <a href="#"><i className="fas fa-user-circle"></i></a>
                        </div>
                        <div className="mt-5">
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <i className="fas fa-user input-group-text user-icons"></i>
                                </div>
                                <input className="form-control" placeholder="Name" disabled/>
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <i className="fas fa-calendar input-group-text user-icons"></i>
                                </div>
                                <input className="form-control" placeholder="Age" disabled/>
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <i className="fas fa-phone input-group-text user-icons"></i>
                                </div>
                                <input className="form-control" placeholder="Phone number" disabled/>
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <i className="fas fa-envelope input-group-text user-icons"></i>
                                </div>
                                <input className="form-control" placeholder="Email" disabled/>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Pay modal */}
                <Pay/>
                {/* Settings modal */}
                <Settings/>
            </div>
        )
    }
}