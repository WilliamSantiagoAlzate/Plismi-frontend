//Import react libraries
import React, { Component } from "react";
import { Link } from 'react-router-dom';

//Import style
import '../css/footer.css';

//Create component
export default class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="container footer-plismi">
                    <Link to={"#" + this.props.Link} className="footer-button" data-toggle="modal">
                        <i className={this.props.Icon + " footer-icon"}>Icon</i>
                    </Link>
                </div>
            </footer>
        )
    }
}