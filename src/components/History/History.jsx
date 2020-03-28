//Import react libraries
import React, { Component } from "react";

//Import components
import HistoryItem from "../HistoryItem/HistoryItem";

//Create component
export default class History extends Component {
    render() {
        return (
            //Bootstrap modal
            <div 
                aria-hidden="true"
                aria-labelledby="exampleModalScrollableTitle" 
                className="modal fade" 
                id="history-modal" 
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
                                History
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