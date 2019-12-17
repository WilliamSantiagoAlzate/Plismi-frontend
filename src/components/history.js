//Import react libraries
import React, { Component } from "react";

//Import components
import HistoryItem from "./history-item";

//Create component
export default class History extends Component {
    render() {
        return (
            <div className="modal fade" id="history-modal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalScrollableTitle">History</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form style={{width: '90%'}}>
                                <HistoryItem/>
                                <HistoryItem/>
                                <HistoryItem/>
                                <HistoryItem/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}