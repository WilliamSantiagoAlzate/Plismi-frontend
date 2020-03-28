//Import react libraries
import React, { Component } from "react";

//Import components
import FilterItem from "../FilterItem/FilterItem";

//Create component
export default class Filters extends Component {
    render() {
        return (
            //Bootstrap modal
            <div 
                aria-hidden="true"
                aria-labelledby="exampleModalScrollableTitle" 
                className="modal fade" 
                id="filters-modal" 
                role="dialog" 
                tabIndex="-1" 
            >
                <div 
                    className="modal-dialog modal-dialog-centered modal-dialog-scrollable" 
                    role="document"
                >
                    <div className="modal-content">

                        {/* Modal header */}
                        <div className="modal-header">
                            <h5 
                                className="modal-title" 
                                id="exampleModalScrollableTitle"
                            >
                                Filter #
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
                            <form style={{width: '100%'}}>
                                <FilterItem/>
                                <FilterItem/>
                                <FilterItem/>
                                <FilterItem/>
                                <FilterItem/>
                                <FilterItem/>
                                <FilterItem/>
                                <FilterItem/>
                                <FilterItem/>
                                <FilterItem/>
                            </form>
                        </div>

                        {/* Modal footer */}
                        <div className="modal-footer">
                            <button className="btn btn-danger" type="button">
                                Apply
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}