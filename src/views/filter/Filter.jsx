//Import react libraries
import React, { Component } from "react";

//Import style
import './Filter.css';

//Import components
import Filters from "../../components/Filters/Filters";
import Price from "../../components/Price/Price";

//Create component
export default class Filter extends Component {

    render() {
        return (
            <div className="filter">

                {/* Filter options */}
                <div className="container m-auto" style={this.props.style}>
                    <a 
                        className="filters col-md-12" 
                        data-toggle="modal"
                        href="#filters-modal" 
                    >
                        <h1>Filter 1</h1>
                    </a>
                    <a 
                        className="filters col-md-12" 
                        data-toggle="modal"
                        href="#filters-modal" 
                    >
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