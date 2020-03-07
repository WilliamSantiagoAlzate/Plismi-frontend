//Import react libraries
import React, { Component } from "react";

//Import style
import '../css/footer.css';

//Create component
export default class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="container footer-plismi">
                    <a href={"#" + this.props.Link} className="footer-button" data-toggle="modal">
                        <i className={this.props.Icon + " footer-icon"}></i>
                    </a>
                </div>
            </footer>
        )
    }
}