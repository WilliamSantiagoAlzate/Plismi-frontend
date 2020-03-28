//Import react libraries
import React, { Component } from "react";

// Import OwlCarousel
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

//Import components
import Girl from "../../components/Girl/Girl";
import History from "../../components/History/History";

//Import style
import './Girls.css';

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

                {/* Girl view */}
                <OwlCarousel
                    center= {true}
                    className="owl-theme girls"
                    dots={false}
                    loop={false}
                    margin={10}
                    responsive={responsive}
                    style={this.props.style}
                >
                    <Girl Height={this.props.style}/>
                    <Girl Height={this.props.style}/>
                    <Girl Height={this.props.style}/>
                    <Girl Height={this.props.style}/>
                    <Girl Height={this.props.style}/>
                </OwlCarousel>
                
                {/* History modal */}
                <History/>

            </div>
        )
    }
}