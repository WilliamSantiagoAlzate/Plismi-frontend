//Import react libraries
import React, { Component } from "react";
import { Link } from 'react-router-dom';

//Import style
import './Pay.css';

//Create component
export default class Pay extends Component {

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
                id="pay-modal" 
                role="dialog" 
                tabIndex="-1" 
            >
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">

                        {/* Modal header */}
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                Pay
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

                            {/* Cash mode button */}
                            <Link className="pay-buttons" to="#">
                                <i className="fas fa-money-bill logo-pay"></i>
                            </Link>

                            {/* Credit card mode button */}
                            { this.state.link === this.state.origin + "/creditcard" ? null :
                                <Link className="pay-buttons" to="/creditcard">
                                    <i className="fas fa-credit-card logo-pay"></i>
                                </Link>
                            }

                            {/* Paypal mode button */}
                            <Link className="pay-buttons" to="#">
                                <i className="fab fa-paypal logo-pay"></i>
                            </Link>
                            
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}