import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Alert } from 'react-bootstrap';
import useUpcomingMoviesQuery from '../../../../hooks/useUpcomingMovies';
import MovieCard from '../MovieCard/MovieCard';
import './UpcomingSlide.style.css';
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

const UpcomingSlide = () => {
    const {data, isLoading, error} = useUpcomingMoviesQuery();

    if (isLoading) {
        return <h1>Loading...</h1>;
    }
    if (error) {
        return <Alert variant="danger">{error.message}</Alert>;
    }

    return (
        <div className='upcoming-movies-container'>
            <div className='upcoming-movies-title'>Upcoming Movies</div>
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

export default UpcomingSlide
