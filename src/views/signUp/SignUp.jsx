//Import react libraries
import React, { Component } from "react";

//Import axios library
import axios from 'axios';

//Import style
import './SignUp.css';

//Import images
import logo from "../../images/Logohd.jpg";

//Create component
export default class SignUp extends Component {

    state = {
        age: "",
        confirm_password: "",
        email: "",
        name: "",
        password: "",
        phoneNumber: ""
    }

    //Handler of input change
    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    //Validation of inputs
    validate = () => {
        if(this.state.password.length > 5) {
            if(this.state.password === this.state.confirm_password) {
                return true
            } else {
                alert('Password do not match')
                return false
            }
        } else {
            alert('Password must be least 5 characters')
            return false
        }
    }

    //Sign Up function
    onSubmit = async (e) => {
        e.preventDefault();
        const validate = this.validate();
        if(validate) {
            await axios.post('http://localhost:4000/api/users/signup', {
                age: this.state.age,
                confirm_password: this.state.confirm_password,
                email: this.state.email,
                name: this.state.name,
                password: this.state.password,
                phoneNumber: this.state.phoneNumber
            })
            .then((res) => {
                console.log(res);
                if(res.data === "ok") {
                    window.location.replace(window.location.origin + "/signin");
                } else {
                    alert('The Email is already in use');
                }
            })
            .catch((err)=> {
                console.log(err);
            });
        }
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
                                action="/signup" 
                                method="POST" 
                                onSubmit={this.onSubmit}
                            >
                                
                                {/* Email input */}
                                <div className="form-group">
                                    <input
                                        autofocus 
                                        className="form-control" 
                                        name="name" 
                                        onChange={this.onInputChange}
                                        placeholder="Name" 
                                        required
                                        type="text" 
                                        value={this.state.name}
                                    />
                                </div>

                                {/* Age input */}
                                <div className="form-group">
                                    <input 
                                        className="form-control" 
                                        name="age" 
                                        onChange={this.onInputChange}
                                        placeholder="Age" 
                                        required
                                        type="number" 
                                        value={this.state.age}
                                    />
                                </div>

                                {/* Phone number input */}
                                <div className="form-group">
                                    <input 
                                        className="form-control" 
                                        name="phoneNumber" 
                                        onChange={this.onInputChange}
                                        placeholder="Phone Number" 
                                        required
                                        type="number" 
                                        value={this.state.phoneNumber}
                                    />
                                </div>

                                {/* Email input */}
                                <div className="form-group">
                                    <input 
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

                                {/* Confirm password input */}
                                <div className="form-group">
                                    <input 
                                        className="form-control" 
                                        name="confirm_password" 
                                        onChange={this.onInputChange}
                                        placeholder="Confirm password" 
                                        required
                                        type="password" 
                                        value={this.state.confirm_password}
                                    />
                                </div>

                                {/* Sign Up button */}
                                <div className="form-group">
                                    <button 
                                        className="btn btn-light btn-block"
                                        type="submit" 
                                    >
                                        SignUp
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