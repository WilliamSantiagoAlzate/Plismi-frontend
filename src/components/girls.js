//Import react libraries
import React, { Component } from "react";

// Import OwlCarousel
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

//Import components
import Girl from "./girl";
import History from "./history";

//Import style
import '../css/girls.css';

//Create responsive desing of carousel
const responsive = {
    0:{
        items:1,
        nav:false
    },
    600:{
        items:1,
        nav:true
    },
    1000:{
        items:1,
        nav:true
    }
  };


//Create component
export default class Girls extends Component {
    render() {
        return (
            <div>
                <OwlCarousel
                    className="owl-theme girls"
                    loop={false}
                    margin={10}
                    dots={false}
                    center= {true}
                    responsive={responsive}
                    style={this.props.style}
                >
                    <Girl Height={this.props.style}/>
                    <Girl Height={this.props.style}/>
                    <Girl Height={this.props.style}/>
                    <Girl Height={this.props.style}/>
                    <Girl Height={this.props.style}/>
                </OwlCarousel>
                <History/>
            </div>
        )
    }
}