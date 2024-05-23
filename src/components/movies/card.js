import React, { Component } from 'react';
import "./card.css"
import GradeIcon from '@mui/icons-material/Grade';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { useParams } from "react-router-dom";
import { fetch_single_movies } from '../../fetchapi';
import { IMAGE_BASE_URL, BACKDROP_SIZE} from '../../config';

function withRouter(Component) {
  return props => <Component {...props} params={useParams()} />;
}
class MoviePage extends Component {
constructor(props) {
    super(props);
    this.state ={
      single_movie : {}
    }
}  



componentDidMount(){
    const id = this.props.params;
    const api = async () => {
      const movies = await fetch_single_movies(id.movie)
      this.setState({single_movie:movies})
      console.log(this.state.single_movie)  
    }

    api(1)

    
    
   
}

  render() {
    
    const backgroundcolor = {
        color:"rgb(250, 250, 250,0.77)",
        fontSize: "20px",
        marginLeft: "0px",
        marginRight: "0px"

    }
    return (
      <div className="containerised" style={{backgroundImage:`url(${IMAGE_BASE_URL+BACKDROP_SIZE+this.state.single_movie.backdrop_path})`}}>
        <div className='norm'>
        <div className='movie_image'  >
          <div className='glass'>
           <div className='image'  style={{backgroundImage:`url(${IMAGE_BASE_URL+BACKDROP_SIZE+this.state.single_movie.poster_path})`}}></div>
          </div>
        </div>
        <div className='description_for_movie'>
          <h1> {this.state.single_movie.title}</h1>
          
          
            <p className='movie_description'>Description: {this.state.single_movie.overview}</p>
            <div className='time_stamps'>
              <p>Release Date: {this.state.single_movie.release_date}</p>
              <p>Duration: {this.state.single_movie.duration}</p>
              
            </div>
          
          <div className='upvotes'>upvotes<ThumbUpIcon style={backgroundcolor}/>:{this.state.single_movie.vote_count}   Likes<FavoriteIcon style={backgroundcolor}/>:{this.state.single_movie.vote_count} Rating<GradeIcon style={backgroundcolor}/>:{this.state.single_movie.vote_average}  </div>
        </div>
        </div>
      </div>
    );
  }
}

const Cast = ({ cast }) => {
  return (
    <div>
      <h2>Cast</h2>
      <ul>
        {cast.map(actor => (
          <li key={actor.name}>
            {actor.name} as {actor.role}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default withRouter(MoviePage);
