import React, { Component } from 'react';
import './bob.css'
import {IMAGE_BASE_URL,  BACKDROP_SIZE} from '../../config'
import { Link } from 'react-router-dom';
class Carded extends Component {
    constructor(props) {
        super(props);
    }
    state = { 
        
    }
    
    render() { 
        return ( <Link to={`movies/${this.props.id}`}>
                <div class="card" style={{backgroundImage:`url(${IMAGE_BASE_URL+BACKDROP_SIZE+this.props.img_url})`}}>
                
                </div>
                </Link>
         );
    }
}
 
export default Carded;
