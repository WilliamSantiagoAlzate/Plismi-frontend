//Import react libraries
import React, { Component } from "react";

//Import axios library
import axios from 'axios';

//Import style
import './SignIn.css';

//Import images
import logo from "../../images/Logohd.jpg";

//Create component
export default class SignIn extends Component {
    
    state = {
        email: "",
        password: ""
    }

    //Handler of input change 
    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    //Sign In fuction
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
                
                {/* Left side */}
                <div className="left-sign bg-secondary">
                    {/* Image */}
                </div>

                {/* Right side */}
                <div className="right-sign">
                    <div className="text-center w-100">

                        {/* Logo */}
                        <div>
                            <img 
                                alt="logo_plismi" 
                                className="logo-home" 
                                src={logo}
                            />
                            <h1>Plismi</h1>
                        </div>

                        {/* Sign In form */}
                        <div className="card-body">
                            <form 
                                action="/signin" 
                                method="POST" 
                                onSubmit={this.onSubmit}
                            >

                                {/* Email input */}
                                <div className="form-group">
                                    <input 
                                        autoFocus
                                        className="form-control" 
                                        name="email" 
                                        onChange={this.onInputChange}
                                        placeholder="Email"
                                        required 
                                        type="email" 
                                        value={this.state.email}
                                    />
                                </div>

                                {/* Password input */}
                                <div className="form-group">
                                    <input 
                                        className="form-control" 
                                        name="password" 
                                        onChange={this.onInputChange}
                                        placeholder="Password"
                                        required
                                        type="password" 
                                        value={this.state.password}
                                    />
                                </div>

                                {/* Sign In button */}
                                <div className="form-group">
                                    <button 
                                        className="btn btn-light btn-block"
                                        type="submit" 
                                    >
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