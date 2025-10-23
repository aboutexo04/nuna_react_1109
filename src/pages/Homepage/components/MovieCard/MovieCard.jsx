import React, { useState } from 'react'
import { Badge } from 'react-bootstrap';
import './MovieCard.style.css';
import { getGenreName } from '../../../../constants/genreMap';

const MovieCard = ({movie}) => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return <div
  style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`}}
  className={`movie-card ${isActive ? 'active' : ''}`}
  onClick={handleToggle}>
    <div className='overlay'>
        <div className='overlay-title'>
        {movie.title}
        </div>
        <div className='genre-badges'>
        {movie.genre_ids.map((id, index)=>
            <Badge key={index} bg="danger" className='genre-badge'>{getGenreName(id)}</Badge>
        )}
        </div>
        <div className='movie-info'>
          <div className='info-item'>
            <span className='info-label'>Rating:</span>
            <span className='info-value'>{movie.vote_average.toFixed(1)}</span>
          </div>
          <div className='info-item'>
            <span className='info-label'>Reviews:</span>
            <span className='info-value'>{movie.vote_count.toLocaleString()}</span>
          </div>
          <div className='info-item'>
            <Badge bg={movie.adult ? 'warning' : 'success'} className='age-badge'>
              {movie.adult ? '18+' : 'All Ages'}
            </Badge>
          </div>
        </div>
    </div>

  </div>
};

export default MovieCard;
