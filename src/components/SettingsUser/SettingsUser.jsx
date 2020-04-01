//Import react libraries
import React, { Component } from "react";
import { Link } from 'react-router-dom';

//Import style
import './SettingsUser.css';

//Create component
export default class SettingsUser extends Component {

    state = {
        link: window.location.href,
        origin: window.location.origin
    }

    render() {
        return (
            //Bootstrap modal
            <div 
                aria-hidden="true"
                aria-labelledby="exampleModalLabel" 
                className="modal fade" 
                id="settings-modal" 
                role="dialog" 
                tabIndex="-1" 
            >
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">

                        {/* Modal header */}
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                User Settings
                            </h5>
                            <button 
                                aria-label="Close"
                                className="close" 
                                data-dismiss="modal" 
                                type="button" 
                            >
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>

                        {/* Modal body */}
                        <div className="modal-body">

                            {/* Pay mode button */}
                            <div className="text-center">
                                <a 
                                    data-dismiss="modal"
                                    data-toggle="modal" 
                                    className="pay-buttons" 
                                    href="#pay-modal" 
                                >
                                    <i className="fas fa-money-check-alt logo-pay"></i>
                                </a>
                                <h5 className="mt-1">Pay mode</h5>
                            </div>

                            {/* Edit profile button */}
                            { this.state.link === this.state.origin + "/editUser" ? null :
                                <div className="text-center">
                                    <Link className="pay-buttons" to="/editUser">
                                        <i className="fas fa-user-edit logo-pay"></i>
                                    </Link>
                                    <h5 className="mt-1">Edit profile</h5>
                                </div>
                            }

                            {/* Log out button */}
                            <div className="text-center">
                                <a 
                                    className="pay-buttons" 
                                    data-dismiss="modal"
                                    onClick={() => {
                                        localStorage.removeItem('usertoken');
                                        window.location.replace(window.location.origin);
                                    }} 
                                >
                                    <i className="fas fa-door-open logo-pay"></i>
                                </a>
                                <h5 className="mt-1">Log out</h5>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        )
    }
}