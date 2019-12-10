//Import react libraries
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//Import components
import Header from "./components/header";
import Footer from "./components/footer";
import Girls from "./components/girls";
import User from "./components/user";
import Filter from "./components/filter";
import Home from "./components/home";

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
        <Router>
          <Route exact path="/" render={() => {
            return (
              <Home/>
            )
          }}/>
          <Route path="/girls" render={() => {
            return (
              <div className="App">
                <Header/>
                <Girls 
                  onResize={this.changeHeight}
                  style={this.state.style}
                />
                <Footer Icon="fas fa-history" Link=""/>
              </div>
            )
          }}/>
          <Route path="/filter" render={() => {
            return (
              <div className="App">
                <Header/>
                <Filter
                  onResize={this.changeHeight}
                  style={this.state.style}
                />
                <Footer Icon="fas fa-funnel-dollar" Link="price-modal"/>
              </div>
            )
          }}/>
          <Route path="/user" render={() => {
            return (
              <div className="App">
                <Header/>
                <User
                  onResize={this.changeHeight}
                  style={this.state.style}
                />
                <Footer Icon="fas fa-money-check-alt" Link="pay-modal"/>
              </div>
            )
          }}/>
        </Router>
    );
  }
}
