//Import react libraries
import React, { Component } from "react";

//Import axios library
import axios from 'axios';

//Import style
import '../css/sign.css';

//Import images
import logo from "../img/Logohd.jpg"

//Create component
export default class SignIn extends Component {
    
    state = {
        email: "",
        password: ""
    }

    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:4000/api/users/signin', {
            email: this.state.email,
            password: this.state.password
        })
        .then((res) => {
            console.log(res);
            if(res.data === "The password do not match") {
                alert('The password do not match');
            } else if (res.data === "The Email is not registered") {
                alert('The Email is not registered');
            } else {
                localStorage.setItem('usertoken', res.data)
                window.location.replace(window.location.origin + "/girls");
            }
        })
        .catch((err)=> {
            console.log(err);
        });
    }
    
    render() {
        return (
            <div className="sign">
                <div className="left-sign bg-secondary">
                    
                </div>
                <div className="right-sign">
                    <div className="text-center w-100">
                        <div>
                            <img src={logo} alt="logo_plismi" className="logo-home"/>
                            <h1>Plismi</h1>
                        </div>
                        <div className="card-body">
                            <form action="/signin" method="POST" onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input 
                                        type="email" 
                                        className="form-control" 
                                        name="email" 
                                        placeholder="Email"
                                        value={this.state.email}
                                        onChange={this.onInputChange}
                                        required 
                                        autoFocus
                                    />
                                </div>
                                <div className="form-group">
                                    <input 
                                        type="password" 
                                        className="form-control" 
                                        name="password" 
                                        placeholder="Password"
                                        value={this.state.password}
                                        onChange={this.onInputChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-light btn-block">
                                        SigIn
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}