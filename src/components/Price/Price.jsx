//Import react libraries
import React, { Component } from "react";

//Create component
export default class Price extends Component {

    constructor(props) {
        super(props);
        this.state = {
            maxInput: "",
            maxOutput: 0,
            minInput: "",
            minOutput: 0
        };
    }

    //Put (,) in thousands
    format = e => {
        var num = e.target.value.replace(/,/g,'');

        num = num.toString().split('').reverse().join('').replace(/(?=\d*,?)(\d{3})/g,'$1,');
        num = num.split('').reverse().join('').replace(/^[,]/,'');

        if (e.target.name === "min") {
            this.setState({
                minInput: e.target.value,
                minOutput: num
            })
        } else {
            this.setState({
                maxInput: e.target.value,
                maxOutput: num
            })
        }

    };

    render() {
        return (
            //Bootstrap modal
            <div 
                aria-hidden="true"
                aria-labelledby="exampleModalLabel" 
                className="modal fade" 
                id="price-modal" 
                role="dialog" 
                tabIndex="-1" 
            >
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">

                        {/* Modal header */}
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                Price
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

                            {/* Form of price range */}
                            <form className="row">

                                {/* Min price input*/}
                                <div className="input-group col-md-6">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text">$</div>
                                    </div>
                                    <input 
                                        autoComplete="off" 
                                        className="form-control" 
                                        name="min" 
                                        onChange={this.format}
                                        placeholder="Min" 
                                        type="number" 
                                        value={this.state.minInput} 
                                    />
                                </div>

                                {/* Max price input */}
                                <div className="input-group col-md-6">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text">$</div>
                                    </div>
                                    <input 
                                        autoComplete="off" 
                                        className="form-control" 
                                        name="max" 
                                        onChange={this.format}
                                        placeholder="Max" 
                                        type="number" 
                                        value={this.state.maxInput} 
                                    />
                                </div>

                                {/* View of price range */}
                                <label className="col-md-12 mt-3 text-center">
                                    ${this.state.minOutput} - ${this.state.maxOutput}
                                </label>

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