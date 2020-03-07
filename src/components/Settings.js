//Import react libraries
import React, { Component } from "react";
import { Link } from 'react-router-dom';

//Import style
import '../css/pay.css';

//Create component
export default class Settings extends Component {
    render() {
        return (
            <div className="modal fade" id="settings-modal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">User Settings</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="text-center">
                                <a href="#pay-modal" className="pay-buttons" data-toggle="modal" data-dismiss="modal">
                                    <i className="fas fa-money-check-alt logo-pay"></i>
                                </a>
                                <h5 className="mt-1">Pay mode</h5>
                            </div>
                            { window.location.href === window.location.origin + "/editUser" ? null :
                                <div className="text-center">
                                    <Link to="/editUser" className="pay-buttons">
                                        <i className="fas fa-user-edit logo-pay"></i>
                                    </Link>
                                    <h5 className="mt-1">Edit profile</h5>
                                </div>
                            }
                            <div className="text-center">
                                <a href="#" className="pay-buttons" data-dismiss="modal">
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