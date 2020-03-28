//Import react libraries
import React, { Component } from "react";

//Import components
import Pay from "../../components/Pay/Pay";

//Import style
import './CreditCard.css';

//Create component
export default class CreditCard extends Component {

    //Remove modal
    componentWillMount() {
        let element = document.getElementsByClassName('modal-backdrop');
        if (element.length === 1) {
            element[0].parentNode.removeChild(element[0]);
        };
    }

    render() {
        return (
            <div className="credit-card vw-100 d-flex" style={this.props.style}>

                {/* Form of pay with credit card */}
                <div className="form col-md-5 mx-auto my-auto bg-light p-4 rounded-lg">

                    {/* Logos of types of credit card accepted */}
                    <div className="row mb-3">
                        <div className="col-md-12 text-center">
                            <i className="fab fa-cc-visa logo-credit-card mr-2"></i>
                            <i className="fab fa-cc-mastercard logo-credit-card mr-2"></i>
                            <i className="fab fa-cc-amex logo-credit-card mr-2"></i>
                            <i className="fab fa-cc-diners-club logo-credit-card mr-2"></i>
                        </div>
                    </div>

                    {/* Input of credit card number */}
                    <div className="row mb-3">
                        <div className="col-md-12">
                            <input 
                                className="form-control" 
                                placeholder="Enter Card Number"
                                type="text" 
                            />
                        </div>
                    </div>

                    {/* Inputs of card extra data */}
                    <div className="row mb-3">

                        <div className="col-md-4">
                            <span className="help-block text-muted small-font"> 
                                Expiry Month
                            </span>
                            <input 
                                className="form-control" 
                                placeholder="MM"
                                type="text" 
                            />
                        </div>

                        <div className="col-md-4">
                            <span className="help-block text-muted small-font">  
                                Expiry Year
                            </span>
                            <input 
                                className="form-control" 
                                placeholder="YY"
                                type="text" 
                            />
                        </div>

                        <div className="col-md-4">
                            <br/>
                            <input 
                                className="form-control" 
                                placeholder="CCV"
                                type="text" 
                            />
                        </div>

                    </div>

                    {/* Input of the name on the credit card */}
                    <div className="row mb-3">
                        <div className="col-md-12 pad-adjust">
                            <input 
                                className="form-control" 
                                placeholder="Name On The Card"
                                type="text" 
                            />
                        </div>
                    </div>

                    {/* Form buttons */}
                    <div className="row">
                        <div className="col-md-6 pad-adjust mb-3">
                            <input 
                                className="btn btn-danger btn-block" 
                                type="submit" 
                                value="CANCEL"
                            />
                        </div>
                        <div className="col-md-6 pad-adjust">
                            <input 
                                className="btn btn-dark btn-block" 
                                type="submit" 
                                value="PAY NOW"
                            />
                        </div>
                    </div>

                </div>

                {/* Pay modal */}
                <Pay/>

            </div>
        )
    }
}