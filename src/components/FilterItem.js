//Import react libraries
import React, { Component } from "react";

//Create component
export default class FilterItem extends Component {
    render() {
        return (
            <div className="form-check row mb-2">
                <label className="form-check-label col-md-9">Filter item #</label>
                <input className="form-check-input col-md-3" type="checkbox" value="" id="defaultCheck1"/>
            </div>       
        )
    }
}