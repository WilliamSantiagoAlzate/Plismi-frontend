//Import react libraries
import React, { Component } from "react";

//Import style
import '../css/pay.css';

//Create component
export default class Pay extends Component {
    render() {
        return (
            <div className="modal fade" id="pay-modal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
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
                            <a href="/creditcard" className="pay-buttons">
                                <i className="fas fa-credit-card logo-pay"></i>
                            </a>
                            <a href="#" className="pay-buttons">
                                <i className="fab fa-paypal logo-pay"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}