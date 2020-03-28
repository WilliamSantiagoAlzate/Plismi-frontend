//Import react libraries
import React, { Component } from "react";

//Import style
import './EditUser.css';

//Import components
import Pay from "../../components/Pay/Pay";
import SettingsUser from "../../components/SettingsUser/SettingsUser";

//Create component
export default class EditUser extends Component {
    
    //Remove modal
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

                        {/* User picture */}
                        <div className="user-picture mb-2">
                            <a href="#">
                                <i className="fas fa-user-circle"></i>
                            </a>
                        </div>

                        {/* User data form */}
                        <form action="">

                            {/* Name input */}
                            <div className="input-group mb-2">
                                <div className="input-group-prepend">
                                    <i className="fas fa-user input-group-text user-icons"></i>
                                </div>
                                <input 
                                    className="form-control" 
                                    placeholder="Name"
                                    type="text" 
                                />
                            </div>

                            {/* Age input */}
                            <div className="input-group mb-2">
                                <div className="input-group-prepend">
                                    <i className="fas fa-calendar input-group-text user-icons"></i>
                                </div>
                                <input 
                                    className="form-control" 
                                    placeholder="Age"
                                    type="number" 
                                />
                            </div>

                            {/* Phone input */}
                            <div className="input-group mb-2">
                                <div className="input-group-prepend">
                                    <i className="fas fa-phone input-group-text user-icons"></i>
                                </div>
                                <input 
                                    className="form-control" 
                                    placeholder="Phone number"
                                    type="number" 
                                />
                            </div>

                            {/* Email input */}
                            <div className="input-group mb-2">
                                <div className="input-group-prepend">
                                    <i className="fas fa-envelope input-group-text user-icons"></i>
                                </div>
                                <input 
                                    className="form-control" 
                                    placeholder="Email"
                                    type="email" 
                                />
                            </div>

                            {/* Password input */}
                            <div className="input-group mb-2">
                                <div className="input-group-prepend">
                                    <i className="fas fa-key input-group-text user-icons"></i>
                                </div>
                                <input 
                                    className="form-control" 
                                    placeholder="Password"
                                    type="password" 
                                />
                            </div>

                            {/* Confirm password input */}
                            <div className="input-group mb-2">
                                <div className="input-group-prepend">
                                    <i className="fas fa-key input-group-text user-icons"></i>
                                </div>
                                <input 
                                    className="form-control" 
                                    placeholder="Confirm password"
                                    type="password" 
                                />
                            </div>

                            {/* Save button */}
                            <button className="btn btn-danger btn-lg">
                                Save changes
                            </button>

                        </form>

                    </div>
                </div>

                {/* Pay modal */}
                <Pay/>

                {/* Settings modal */}
                <SettingsUser/>

            </div>
        )
    }
}