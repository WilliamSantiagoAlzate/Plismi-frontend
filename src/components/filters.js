//Import react libraries
import React, { Component } from "react";

//Import components
import FilterItem from "./filter-item";

//Create component
export default class Filters extends Component {
    render() {
        return (
            <div className="modal fade" id="filters-modal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-scrollable" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalScrollableTitle">Filter #</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form style={{width: '100%'}}>
                            <FilterItem/>
                            <FilterItem/>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger">Apply</button>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}