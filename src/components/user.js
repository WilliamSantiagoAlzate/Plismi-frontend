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
                            <a href="#"><i className="fas fa-user-circle"></i></a>
                        </div>
                        <form action="">
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <i className="fas fa-user input-group-text user-icons"></i>
                                </div>
                                <input type="text" className="form-control" placeholder="Name"/>
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <i className="fas fa-calendar input-group-text user-icons"></i>
                                </div>
                                <input type="number" className="form-control" placeholder="Age"/>
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <i className="fas fa-phone input-group-text user-icons"></i>
                                </div>
                                <input type="number" className="form-control" placeholder="Phone number"/>
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <i className="fas fa-envelope input-group-text user-icons"></i>
                                </div>
                                <input type="email" className="form-control" placeholder="Email"/>
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <i className="fas fa-key input-group-text user-icons"></i>
                                </div>
                                <input type="password" className="form-control" placeholder="Password"/>
                            </div>
                            <button className="btn btn-danger btn-lg">
                                Save changes
                            </button>
                        </form>
                    </div>
                </div>
                <div className="modal fade" id="pay-modal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Pay</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <a href="#" className="pay-buttons">
                                    <i className="fas fa-money-bill logo-pay"></i>
                                </a>
                                <a href="#" className="pay-buttons">
                                    <i className="fas fa-credit-card logo-pay"></i>
                                </a>
                                <a href="#" className="pay-buttons">
                                    <i className="fab fa-paypal logo-pay"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}