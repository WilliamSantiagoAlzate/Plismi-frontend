//Import react libraries
import React, { Component } from "react";

//Create component
export default class CreditCard extends Component {
    render() {
        return (
            <div className="credit-card vw-100 d-flex" style={this.props.style}>
                <div className="form col-md-5 mx-auto my-auto bg-light p-4 rounded-lg">
                    <div className="row mb-3">
                        <div className="col-md-12 text-center">
                            <i className="fab fa-cc-visa logo-credit-card mr-2"></i>
                            <i className="fab fa-cc-mastercard logo-credit-card mr-2"></i>
                            <i className="fab fa-cc-amex logo-credit-card mr-2"></i>
                            <i className="fab fa-cc-diners-club logo-credit-card mr-2"></i>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-md-12">
                            <input type="text" className="form-control" placeholder="Enter Card Number"/>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-md-4">
                            <span className="help-block text-muted small-font"> Expiry Month</span>
                            <input type="text" className="form-control" placeholder="MM"/>
                        </div>
                        <div className="col-md-4">
                            <span className="help-block text-muted small-font">  Expiry Year</span>
                            <input type="text" className="form-control" placeholder="YY"/>
                        </div>
                        <div className="col-md-4">
                            <br/>
                            <input type="text" className="form-control" placeholder="CCV"/>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-md-12 pad-adjust">
                            <input type="text" className="form-control" placeholder="Name On The Card"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 pad-adjust mb-3">
                            <input type="submit" className="btn btn-danger btn-block" value="CANCEL"/>
                        </div>
                        <div className="col-md-6 pad-adjust">
                            <input type="submit" className="btn btn-dark btn-block" value="PAY NOW"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}