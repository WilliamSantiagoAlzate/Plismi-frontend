//Import react libraries
import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

//Import components
import Header from "./components/header";
import Footer from "./components/footer";
import Girls from "./components/girls";
import User from "./components/user";
import Filter from "./components/filter";
import Home from "./components/home";
import CreditCard from "./components/credit-card";

//Import style
import './css/app.css';

var width = document.documentElement.clientWidth;
var headerHeight = 120;

if (width <= 800) {
  headerHeight = 80;
}

var URL = window.location.pathname;

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
      <BrowserRouter>
        <Switch>
          <Route exact path="/"><Home/></Route>
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
          <Route path="/user">
            <div className="App">
              <Header/>
              <User
                onResize={this.changeHeight}
                style={this.state.style}
              />
              <Footer Icon="fas fa-money-check-alt" Link="pay-modal"/>
            </div>
          </Route>   
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
        </Switch>
      </BrowserRouter>
    );
  }
}
