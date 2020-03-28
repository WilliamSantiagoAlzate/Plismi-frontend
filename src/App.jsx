//Import react libraries
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

//Import components
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

//Import views
import CreditCard from "./views/creditCard/CreditCard";
import EditUser from "./views/editUser/EditUser";
import Filter from "./views/filter/Filter";
import Girls from "./views/girls/Girls";
import Home from "./views/home/Home";
import SignIn from "./views/signIn/SignIn";
import SignUp from "./views/signUp/SignUp";
import User from "./views/user/User";

//Import style
import './App.css';

//Initialization of header height
var headerHeight = 120;
var width = document.documentElement.clientWidth;

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

  //Put dynamic height
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

          {/* Edit user page */}
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
