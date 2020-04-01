//Import react libraries
import React, { Component } from "react";

//Import axios library
import axios from 'axios';

//Import style
import './User.css';

//Import components
import Pay from "../../components/Pay/Pay";
import SettingsUser from "../../components/SettingsUser/SettingsUser";

//Create component
export default class User extends Component {

    state = {
        name: "",
        age: "",
        phoneNumber: "",
        email: ""
    }

    //Get user data from database
    async componentDidMount() {
        await axios.get('http://localhost:4000/api/users/' + 
            localStorage.getItem('userid') 
        ).then(res => {
            this.setState({
                name: res.data.name,
                age: res.data.age,
                phoneNumber: res.data.phoneNumber,
                email: res.data.email
            })
        })
    }

    render() {
        return (
            <div className="user mt-5">

                {/* User data */}
                <div className="text-center justify-content-center">
                    <div className="container col-md-4">

                        {/* User picture */}
                        <div className="user-picture mb-3">
                            <a href="#">
                                <i className="fas fa-user-circle"></i>
                            </a>
                        </div>

                        {/* User data */}
                        <div className="mt-5">

                            {/* Name */}
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <i className="fas fa-user input-group-text user-icons"></i>
                                </div>
                                <input 
                                    className="form-control" 
                                    disabled
                                    placeholder="Name"
                                    value={this.state.name} 
                                />
                            </div>

                            {/* Age */}
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <i className="fas fa-calendar input-group-text user-icons"></i>
                                </div>
                                <input 
                                    className="form-control" 
                                    disabled
                                    placeholder="Age"
                                    value={this.state.age} 
                                />
                            </div>

                            {/* Phone number */}
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <i className="fas fa-phone input-group-text user-icons"></i>
                                </div>
                                <input 
                                    className="form-control" 
                                    disabled
                                    placeholder="Phone number"
                                    value={this.state.phoneNumber} 
                                />
                            </div>

                            {/* Email */}
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <i className="fas fa-envelope input-group-text user-icons"></i>
                                </div>
                                <input 
                                    className="form-control" 
                                    disabled
                                    placeholder="Email"
                                    value={this.state.email} 
                                />
                            </div>

                        </div>

                    </div>
                </div>

                {/* Pay modal */}
                <Pay/>
                
                {/* Settings modal */}
                <SettingsUser/>
            
            </div>
        )
    }
}