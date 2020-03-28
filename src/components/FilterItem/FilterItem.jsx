//Import react libraries
import React, { Component } from "react";

//Create component
export default class FilterItem extends Component {
    render() {
        return (
            <div className="form-check row mb-2">

                {/* Description item */}
                <label className="form-check-label col-md-9">
                    Filter item #
                </label>

                {/* Checkbox item */}
                <input 
                    className="form-check-input col-md-3" 
                    id="defaultCheck1"
                    type="checkbox" 
                    value="" 
                />

            </div>       
        )
    }
}