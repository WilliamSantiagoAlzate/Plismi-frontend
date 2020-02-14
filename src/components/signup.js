//Import react libraries
import React, { Component } from "react";

//Import axios library
import axios from 'axios';

//Import style
import '../css/sign.css';

//Import images
import logo from "../img/Logohd.jpg"

//Create component
export default class SignUp extends Component {

    state = {
        name: "",
        age: "",
        phoneNumber: "",
        email: "",
        password: "",
        confirm_password: ""
    }

    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

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

    onSubmit = async (e) => {
        e.preventDefault();
        const validate = this.validate();
        if(validate) {
            await axios.post('http://localhost:4000/api/users', {
                name: this.state.name,
                age: this.state.age,
                phoneNumber: this.state.phoneNumber,
                email: this.state.email,
                password: this.state.password,
                confirm_password: this.state.confirm_password
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
                <div className="left-sign bg-secondary">
                    
                </div>
                <div className="right-sign">
                    <div className="text-center w-100">
                        <div>
                            <img src={logo} alt="logo_plismi" className="logo-home"/>
                            <h1>Plismi</h1>
                        </div>
                        <div className="card-body">
                            <form action="/signup" method="POST" onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        name="name" 
                                        placeholder="Name" 
                                        value={this.state.name}
                                        onChange={this.onInputChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <input 
                                        type="number" 
                                        className="form-control" 
                                        name="age" 
                                        placeholder="Age" 
                                        value={this.state.age}
                                        onChange={this.onInputChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <input 
                                        type="number" 
                                        className="form-control" 
                                        name="phoneNumber" 
                                        placeholder="Phone Number" 
                                        value={this.state.phoneNumber}
                                        onChange={this.onInputChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <input 
                                        type="email" 
                                        className="form-control" 
                                        name="email" 
                                        placeholder="Email" 
                                        value={this.state.email}
                                        onChange={this.onInputChange}
                                        required
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
                                    <input 
                                        type="password" 
                                        className="form-control" 
                                        name="confirm_password" 
                                        placeholder="Confirm password" 
                                        value={this.state.confirm_password}
                                        onChange={this.onInputChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-light btn-block">SignUp</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}