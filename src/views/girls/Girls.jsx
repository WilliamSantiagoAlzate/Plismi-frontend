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

    state = {
        girls: []
    }

    //Get data from Star Wars api while I finish setup my database 
    async getGirls() {
        let res = await fetch('https://swapi.co/api/people/?format=json');
        let data = await res.json();
        data.results.map((i) => {
            this.setState({
                girls: [...this.state.girls, i]
            })
        });
    }

    componentWillMount() {
        this.getGirls();
    }

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
                    {this.state.girls.map((data) => {
                        return (
                            <Girl 
                                Height={this.props.style} 
                                Data={data} 
                                key={data.url}
                            />
                        )
                    })}
                </OwlCarousel>
                
                {/* History modal */}
                <History/>

            </div>
        )
    }
}