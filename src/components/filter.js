//Import react libraries
import React, { Component } from "react";

//Import style
import '../css/filter.css';

//Import components
import Filters from "./Filters";
import Price from "./Price";

//Create component
export default class Filter extends Component {

    render() {
        return (
            <div className="filter">
                {/* Filter options */}
                <div className="container m-auto" style={this.props.style}>
                    <a href="#filters-modal" className="filters col-md-12" data-toggle="modal">
                        <h1>Filter 1</h1>
                    </a>
                    <a href="#filters-modal" className="filters col-md-12" data-toggle="modal">
                        <h1>Filter 2</h1>
                    </a>
                </div>
                {/* Price modal */}
                <Price/>
                {/* Filters modal */}
                <Filters/>
            </div>
        )
    }
}