//Import react libraries
import React, { Component } from "react";

//Import style
import './Footer.css';

//Create component
export default class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="container footer-plismi">

                    {/* Footer button */}
                    <a 
                        className="footer-button" 
                        data-toggle="modal" 
                        href={"#" + this.props.Link}
                    >
                        <i className={this.props.Icon + " footer-icon"}></i>
                    </a>
                    
                </div>
            </footer>
        )
    }
}