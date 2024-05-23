import React, { Component } from 'react';
import './slidebar.css'
import {IMAGE_BASE_URL,  BACKDROP_SIZE} from '../../config'


class Slide_Bar extends Component {
    constructor(props) {
        super(props);
	this.state = {
	    index:0,
	    loading:false,
	    results : []
	}

    };
    render() {
	    return ( 
		    <div className="slideshow-container" style={{backgroundImage:`url(${IMAGE_BASE_URL+BACKDROP_SIZE+this.props.movies})`}}>
		    <div className="mySlides" >
		    <h3>{this.props.title}</h3>
		    <p>{this.props.overview}</p>
                 </div>
                <div className="dot-container" >
		<a  ></a>
                    <span className="dot" ></span>
                    <span className="dot" ></span>
                <span className="dot"></span>

                </div>
		    <div className="search_bar" >

                </div>

            </div>
        
	); 
	    
	}


    
}
 
export default Slide_Bar;
