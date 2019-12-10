//Import react libraries
import React, { Component } from "react";

//Import style
import '../css/filter.css';

//Create component
export default class Filter extends Component {
    render() {
        return (
            <div className="filter">
                <div className="modal fade" id="price-modal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Price</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div class="form-group">
                                        <label for="formControlRange">Example Range input</label>
                                        <input type="range" class="form-control-range" id="formControlRange"/>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-danger">Apply</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}