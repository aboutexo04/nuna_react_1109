import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Alert } from 'react-bootstrap';
import usePopularMoviesQuery from '../../../../hooks/usePopularMovies';
import MovieCard from '../MovieCard/MovieCard';
import './PopularMovieSlide.style.css';
const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    }
  };

const PopularMovieSlide = () => {
    const {data, isLoading, error} = usePopularMoviesQuery();

    if (isLoading) {
        return <h1>Loading...</h1>;
    }
    if (error) {
        return <Alert variant="danger">{error.message}</Alert>;
    }

    return (
        <div className='popular-movies-container'>
            <div className='popular-movies-title'>Popular Movies</div>
            <Carousel
                infinite={true}
                centerMode={true}
                itemClass='multi-slider'
                containerClass='carousel-container'
                responsive={responsive}
            >
               {data.results.map((movie,index)=>(
                <MovieCard movie={movie} key={index} />
               ))}
            </Carousel>
        </div>
    )
}

export default PopularMovieSlide
