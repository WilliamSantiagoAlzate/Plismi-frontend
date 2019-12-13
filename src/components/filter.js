//Import react libraries
import React, { Component } from "react";

//Import style
import '../css/filter.css';

//Create component
export default class Filter extends Component {

    constructor(props) {
        super(props);
        this.state = {
          minInput: "",
          maxInput: "",
          minOutput: 0,
          maxOutput: 0
        };
    }

    format = e => {
        var num = e.target.value.replace(/\,/g,'');

        num = num.toString().split('').reverse().join('').replace(/(?=\d*\,?)(\d{3})/g,'$1,');
        num = num.split('').reverse().join('').replace(/^[\,]/,'');

        if (e.target.name==="min") {
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
            <div className="filter">
                <div className="container m-auto" style={this.props.style}>
                    <a href="#" className="filters col-md-12">
                        <h1>Filter 1</h1>
                    </a>
                    <a href="#" className="filters col-md-12">
                        <h1>Filter 2</h1>
                    </a>
                </div>
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
                                <form className="row">
                                    <div className="input-group col-md-6">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">$</div>
                                        </div>
                                        <input type="number" className="form-control" autoComplete="off" placeholder="Min" name="min" value={this.state.minInput} onChange={this.format}/>
                                    </div>
                                    <div className="input-group col-md-6">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">$</div>
                                        </div>
                                        <input type="number" className="form-control" autoComplete="off" placeholder="Max" name="max" value={this.state.maxInput} onChange={this.format}/>
                                    </div>
                                    <label className="col-md-12 mt-3 text-center">${this.state.minOutput} - ${this.state.maxOutput}</label>
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