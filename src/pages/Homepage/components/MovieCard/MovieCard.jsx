import React, { useEffect, useRef, useState } from 'react'
import { Badge } from 'react-bootstrap';
import './MovieCard.style.css';
import { getGenreName } from '../../../../constants/genreMap';

const MovieCard = ({movie}) => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  const cardRef = useRef(null);

  useEffect(() => {
    const itemElement = cardRef.current?.closest('.react-multi-carousel-item');

    if (!itemElement) {
      return;
    }

    if (isActive) {
      itemElement.style.position = 'relative';
      itemElement.style.zIndex = '20';
      itemElement.style.overflow = 'visible';
    } else {
      itemElement.style.position = '';
      itemElement.style.zIndex = '';
      itemElement.style.overflow = '';
    }

    return () => {
      itemElement.style.position = '';
      itemElement.style.zIndex = '';
      itemElement.style.overflow = '';
    };
  }, [isActive]);

  return <div
  ref={cardRef}
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
