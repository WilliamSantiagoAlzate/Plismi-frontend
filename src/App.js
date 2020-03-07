//Import react libraries
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

//Import components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Girls from "./components/Girls";
import User from "./components/User";
import Filter from "./components/Filter";
import Home from "./components/Home";
import EditUser from "./components/EditUser";
import CreditCard from "./components/CreditCard";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

//Import style
import './css/app.css';

var width = document.documentElement.clientWidth;
var headerHeight = 120;

if (width <= 800) {
  headerHeight = 80;
}

//Create App
export default class App extends Component {

  constructor(props) {
    super(props);
    this.height = document.documentElement.clientHeight - headerHeight;
    this.state = {
      style: {
        height: this.height + "px"
      }
    };
  }

  //Put height
  changeHeight = e => {
    this.height = document.documentElement.clientHeight - headerHeight;
    this.setState({
      style: {
        height: this.height + "px"
      }
    })
  }

  render() {
    return (
        <Switch>

          {/* Home page */}
          <Route exact path="/">
            <Home/>
          </Route>

          {/* Sign In page */}
          <Route path="/signin">
            <SignIn/>
          </Route>

          {/* Sign Up page */}
          <Route path="/signup">
            <SignUp/>
          </Route>

          {/* Girls page */}
          <Route path="/girls">
            <div className="App">
              <Header/>
              <Girls 
                onResize={this.changeHeight}
                style={this.state.style}
              />
              <Footer Icon="fas fa-history" Link="history-modal"/>
            </div>
          </Route>

          {/* Filter page */}
          <Route path="/filter">
            <div className="App">
              <Header/>
              <Filter
                onResize={this.changeHeight}
                style={this.state.style}
              />
              <Footer Icon="fas fa-funnel-dollar" Link="price-modal"/>
            </div>
          </Route>

          {/* User page */}
          <Route path="/user">
            <div className="App">
              <Header/>
              <User
                onResize={this.changeHeight}
                style={this.state.style}
              />
              <Footer Icon="fas fa-user-cog" Link="settings-modal"/>
            </div>
          </Route>

          {/* Pay with credit card page */}
          <Route path="/creditcard">
            <div className="App">
              <Header/>
              <CreditCard
                onResize={this.changeHeight}
                style={this.state.style}
              />
              <Footer Icon="fas fa-money-check-alt" Link="pay-modal"/>
            </div>
          </Route>

          {/* User page */}
          <Route path="/editUser">
            <div className="App">
              <Header/>
              <EditUser
                onResize={this.changeHeight}
                style={this.state.style}
              />
              <Footer Icon="fas fa-user-cog" Link="settings-modal"/>
            </div>
          </Route>

        </Switch>
    );
  }
}
