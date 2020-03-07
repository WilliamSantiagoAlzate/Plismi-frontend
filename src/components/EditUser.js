//Import react libraries
import React, { Component } from "react";

//Import style
import '../css/user.css';

//Import components
import Pay from "./Pay";
import Settings from "./Settings";

//Create component
export default class EditUser extends Component {
    
    componentWillMount() {
        let element = document.getElementsByClassName('modal-backdrop');
        if (element.length === 1) {
            element[0].parentNode.removeChild(element[0]);
        };
    }
    
    render() {
        return (
            <div className="user mt-3">
                {/* User data */}
                <div className="text-center justify-content-center">
                    <div className="container col-md-6">
                        <div className="user-picture mb-2">
                            <a href="#"><i className="fas fa-user-circle"></i></a>
                        </div>
                        <form action="">
                            <div className="input-group mb-2">
                                <div className="input-group-prepend">
                                    <i className="fas fa-user input-group-text user-icons"></i>
                                </div>
                                <input type="text" className="form-control" placeholder="Name"/>
                            </div>
                            <div className="input-group mb-2">
                                <div className="input-group-prepend">
                                    <i className="fas fa-calendar input-group-text user-icons"></i>
                                </div>
                                <input type="number" className="form-control" placeholder="Age"/>
                            </div>
                            <div className="input-group mb-2">
                                <div className="input-group-prepend">
                                    <i className="fas fa-phone input-group-text user-icons"></i>
                                </div>
                                <input type="number" className="form-control" placeholder="Phone number"/>
                            </div>
                            <div className="input-group mb-2">
                                <div className="input-group-prepend">
                                    <i className="fas fa-envelope input-group-text user-icons"></i>
                                </div>
                                <input type="email" className="form-control" placeholder="Email"/>
                            </div>
                            <div className="input-group mb-2">
                                <div className="input-group-prepend">
                                    <i className="fas fa-key input-group-text user-icons"></i>
                                </div>
                                <input type="password" className="form-control" placeholder="Password"/>
                            </div>
                            <div className="input-group mb-2">
                                <div className="input-group-prepend">
                                    <i className="fas fa-key input-group-text user-icons"></i>
                                </div>
                                <input type="password" className="form-control" placeholder="Confirm password"/>
                            </div>
                            <button className="btn btn-danger btn-lg">
                                Save changes
                            </button>
                        </form>
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